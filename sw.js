// 홈 화면에 앱으로 설치할 수 있게 해 주는 최소한의 서비스 워커
// 저장(캐시)은 하지 않음 → 항상 인터넷에서 최신 화면을 받아옴
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
