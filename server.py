"""
ABESIT Lost and Found Web Portal for College
Project ID: 2026-27CSEMPID058
Department of Computer Science & Engineering, ABESIT Ghaziabad

Zero-dependency Python REST API & Static File Web Server.
Compatible with Python 3.8+ (No external pip packages needed).
"""

import http.server
import json
import os
import re
import socketserver
import urllib.parse
from datetime import datetime

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# In-memory storage with initial sample data
ITEMS = [
    {
        "id": "REP-2026-101",
        "type": "lost",
        "title": "Casio FX-991EX Scientific Calculator",
        "category": "Electronics",
        "location": "Central Library (2nd Floor)",
        "date": "2026-10-12",
        "time": "14:30",
        "status": "Under Claim Review",
        "description": "Black casing with slight scratch on the solar panel bezel. Name sticker 'Shashank' peeled off on back cover.",
        "reporter": "Shashank Srivastava (2502900100227)",
        "contact": "shashank.srivastava@abesit.in",
        "potentialMatchId": "REP-2026-202",
        "matchScore": 89,
        "image": "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        "id": "REP-2026-202",
        "type": "found",
        "title": "Casio Scientific Calculator FX ClassWiz",
        "category": "Electronics",
        "location": "Central Library (Reading Hall)",
        "date": "2026-10-12",
        "time": "17:15",
        "status": "Under Claim Review",
        "description": "Found on table #14 near journal rack. Back cover has sticker adhesive residue. Deposited with library desk.",
        "reporter": "Library Staff (Mr. Verma)",
        "contact": "library@abesit.in",
        "potentialMatchId": "REP-2026-101",
        "matchScore": 89,
        "image": "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        "id": "REP-2026-103",
        "type": "lost",
        "title": "HP Pavilion 65W Blue-Pin Laptop Charger",
        "category": "Electronics",
        "location": "CS Block (Computer Lab 3)",
        "date": "2026-10-13",
        "time": "11:45",
        "status": "Reported",
        "description": "Original HP adapter with blue smart pin. Power cord is wrapped with black electrical tape near adapter neck.",
        "reporter": "Shreyas Upadhyay (2502900100243)",
        "contact": "shreyas.upadhyay@abesit.in",
        "potentialMatchId": None,
        "matchScore": 0,
        "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80"
    },
    {
        "id": "REP-2026-204",
        "type": "found",
        "title": "ABESIT Student ID Card (Roll: 250290...)",
        "category": "Identity & Cards",
        "location": "Main Cafeteria (Counter Area)",
        "date": "2026-10-13",
        "time": "13:20",
        "status": "Reported",
        "description": "Green lanyard with ABESIT branding. CSE branch student identity smart card with barcode intact.",
        "reporter": "Cafeteria Supervisor",
        "contact": "campus.canteen@abesit.in",
        "potentialMatchId": None,
        "matchScore": 0,
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
        "id": "REP-2026-105",
        "type": "lost",
        "title": "Black Leather Wildhorn Bifold Wallet",
        "category": "Wallets & Bags",
        "location": "Main Auditorium (Row F)",
        "date": "2026-10-11",
        "time": "16:00",
        "status": "Recovered",
        "description": "Contains Delhi Metro Card, driving license and student passes. Verified and handed over to owner.",
        "reporter": "Shekhar Kumar (2502900100230)",
        "contact": "shekhar.kumar@abesit.in",
        "potentialMatchId": "REP-2026-206",
        "matchScore": 94,
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
    },
    {
        "id": "REP-2026-206",
        "type": "found",
        "title": "Black Leather Wallet with Metro Smart Card",
        "category": "Wallets & Bags",
        "location": "Main Auditorium (Foyer)",
        "date": "2026-10-11",
        "time": "18:30",
        "status": "Recovered",
        "description": "Found under seat during seminar cleanup. Handed over via administrative custodian verification.",
        "reporter": "Event Coordinator",
        "contact": "events@abesit.in",
        "potentialMatchId": "REP-2026-105",
        "matchScore": 94,
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
    },
    {
        "id": "REP-2026-207",
        "type": "found",
        "title": "Set of 3 Godrej Keys with Iron Man Keychain",
        "category": "Keys & Locks",
        "location": "Sports Complex (Basketball Court)",
        "date": "2026-10-12",
        "time": "18:10",
        "status": "Reported",
        "description": "Metallic ring containing 2 cabinet keys, 1 main room key, and a red/gold miniature Marvel Avenger keychain.",
        "reporter": "Priyesh Kumar Singh (2502900100200)",
        "contact": "priyesh.singh@abesit.in",
        "potentialMatchId": None,
        "matchScore": 0,
        "image": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80"
    },
    {
        "id": "REP-2026-108",
        "type": "lost",
        "title": "DSA Handwritten Spiral Register & Formula Sheet",
        "category": "Books & Notes",
        "location": "Ramanujan Block (Lecture Hall 204)",
        "date": "2026-10-10",
        "time": "15:40",
        "status": "Reported",
        "description": "Classmate spiral notebook with green cover. Contains Graph Algorithms, Trees & Dynamic Programming handwritten notes.",
        "reporter": "Ananya Sharma (Roll 2502900100015)",
        "contact": "ananya.sharma@abesit.in",
        "potentialMatchId": None,
        "matchScore": 0,
        "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
    }
]

CLAIMS = [
    {
        "claimId": "CLM-2026-8901",
        "reportId": "REP-2026-202",
        "itemTitle": "Casio Scientific Calculator FX ClassWiz",
        "claimantName": "Shashank Srivastava",
        "claimantRoll": "2502900100227",
        "claimantEmail": "shashank.srivastava@abesit.in",
        "evidence": "Serial number on battery compartment ends with '9021'. Battery door was replaced with a slightly darker matte gray cover.",
        "status": "Pending Custodian Review",
        "timestamp": "2026-10-13 10:15 AM"
    }
]

class PortalHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def _send_json(self, data, status=200):
        body = json.dumps(data, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        # REST API Routes
        if path == "/api/health":
            self._send_json({
                "status": "online",
                "portal": "Lost and Found Web Portal for College",
                "institution": "ABESIT Ghaziabad",
                "project_id": "2026-27CSEMPID058",
                "timestamp": datetime.now().isoformat()
            })
            return

        if path == "/api/items":
            filtered = ITEMS
            if "type" in query and query["type"][0] != "all":
                t = query["type"][0].lower()
                filtered = [i for i in filtered if i["type"].lower() == t]
            if "category" in query and query["category"][0] != "all":
                c = query["category"][0].lower()
                filtered = [i for i in filtered if i["category"].lower() == c]
            if "location" in query and query["location"][0] != "all":
                loc = query["location"][0].lower()
                filtered = [i for i in filtered if loc in i["location"].lower()]
            if "status" in query and query["status"][0] != "all":
                s = query["status"][0].lower()
                filtered = [i for i in filtered if i["status"].lower() == s]
            if "q" in query and query["q"][0].strip():
                q = query["q"][0].lower()
                filtered = [i for i in filtered if q in i["title"].lower() or q in i["description"].lower() or q in i["location"].lower()]

            self._send_json({"count": len(filtered), "items": filtered})
            return

        if path == "/api/claims":
            self._send_json({"count": len(CLAIMS), "claims": CLAIMS})
            return

        # Fallback to static files
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        length = int(self.headers.get("Content-Length", 0))
        post_data = self.rfile.read(length) if length > 0 else b"{}"

        try:
            payload = json.loads(post_data.decode("utf-8"))
        except Exception:
            self._send_json({"error": "Invalid JSON payload"}, 400)
            return

        # POST /api/reports
        if parsed.path == "/api/reports":
            new_id = f"REP-2026-{payload.get('type', 'lost')[0].upper()}{len(ITEMS) + 101}"
            new_item = {
                "id": new_id,
                "type": payload.get("type", "lost"),
                "title": payload.get("title", "Untitled Item"),
                "category": payload.get("category", "General"),
                "location": payload.get("location", "Campus"),
                "date": payload.get("date", datetime.now().strftime("%Y-%m-%d")),
                "time": payload.get("time", "12:00"),
                "status": "Reported",
                "description": payload.get("description", ""),
                "reporter": payload.get("reporter", "Campus Member"),
                "contact": payload.get("contact", "info@abesit.in"),
                "potentialMatchId": None,
                "matchScore": 0,
                "image": payload.get("image", "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80")
            }
            ITEMS.insert(0, new_item)
            self._send_json({"message": "Report created successfully", "item": new_item}, 201)
            return

        # POST /api/claims
        if parsed.path == "/api/claims":
            claim_id = f"CLM-2026-{1000 + len(CLAIMS)}"
            new_claim = {
                "claimId": claim_id,
                "reportId": payload.get("reportId"),
                "itemTitle": payload.get("itemTitle", "Misplaced Belonging"),
                "claimantName": payload.get("claimantName"),
                "claimantRoll": payload.get("claimantRoll"),
                "claimantEmail": payload.get("claimantEmail"),
                "evidence": payload.get("evidence"),
                "status": "Pending Custodian Review",
                "timestamp": datetime.now().strftime("%Y-%m-%d %I:%M %p")
            }
            CLAIMS.insert(0, new_claim)
            for it in ITEMS:
                if it["id"] == payload.get("reportId"):
                    it["status"] = "Under Claim Review"
                    break
            self._send_json({"message": "Claim submitted for verification", "claim": new_claim}, 201)
            return

        # POST /api/match
        if parsed.path == "/api/match":
            lost_id = payload.get("lostId")
            found_id = payload.get("foundId")
            lost_item = next((i for i in ITEMS if i["id"] == lost_id), None)
            found_item = next((i for i in ITEMS if i["id"] == found_id), None)

            if not lost_item or not found_item:
                self._send_json({"error": "Items not found"}, 404)
                return

            cat_score = 40 if lost_item["category"].lower() == found_item["category"].lower() else 0
            desc_score = 22 if "casio" in (lost_item["title"] + found_item["title"]).lower() else 12
            loc_score = 20 if lost_item["location"] == found_item["location"] else 15
            date_score = 12
            total = min(100, cat_score + desc_score + loc_score + date_score)

            self._send_json({
                "lostId": lost_id,
                "foundId": found_id,
                "totalScore": total,
                "breakdown": {
                    "category": cat_score,
                    "description": desc_score,
                    "location": loc_score,
                    "date": date_score
                }
            })
            return

        self._send_json({"error": "Endpoint not found"}, 404)

    def do_PATCH(self):
        parsed = urllib.parse.urlparse(self.path)
        length = int(self.headers.get("Content-Length", 0))
        post_data = self.rfile.read(length) if length > 0 else b"{}"

        try:
            payload = json.loads(post_data.decode("utf-8"))
        except Exception:
            self._send_json({"error": "Invalid JSON"}, 400)
            return

        # PATCH /api/claims/<claimId>
        match = re.match(r"^/api/claims/([^/]+)$", parsed.path)
        if match:
            claim_id = match.group(1)
            target = next((c for c in CLAIMS if c["claimId"] == claim_id), None)
            if not target:
                self._send_json({"error": "Claim not found"}, 404)
                return

            new_status = payload.get("status", "Approved")
            target["status"] = new_status
            if new_status == "Approved":
                report_id = target.get("reportId")
                for it in ITEMS:
                    if it["id"] == report_id:
                        it["status"] = "Recovered"
                        break

            self._send_json({"message": "Claim status updated", "claim": target})
            return

        self._send_json({"error": "Endpoint not found"}, 404)

def run():
    print(f"==================================================")
    print(f"  ABESIT Lost and Found Web Portal (Project 058)  ")
    print(f"==================================================")
    print(f"-> Local URL: http://localhost:{PORT}")
    print(f"-> Serving directory: {BASE_DIR}")
    print(f"-> REST API Health: http://localhost:{PORT}/api/health")
    print(f"==================================================")
    
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), PortalHandler) as httpd:
        httpd.serve_forever()

if __name__ == "__main__":
    run()
