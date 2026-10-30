/** Smart City Klongtumru — ตั้งค่าลิงก์ทั้ง 8 ระบบที่นี่
 * ใส่ URL ที่ขึ้นต้นด้วย https:// ภายในเครื่องหมายคำพูด
 * ตัวอย่าง staff: "https://script.google.com/macros/s/รหัสระบบ/exec"
 * ช่องที่ยังไม่มีลิงก์ให้เว้นว่าง ""
 */
const LINKS = {
  "staff": "https://localgov.egov.go.th/municipal/login",
  "citizen": "https://localgov.egov.go.th/%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B8-05200107/service/one-stop-service",
  "cdp": "https://script.google.com/macros/s/AKfycbw8ymRiS3Qvngeivz3iFmkLr9eYn7mC46ZqrEWUnYtSmQqwTRUHsmun44Z0PVwCNRArwQ/exec",
  "waste": "https://script.google.com/macros/s/AKfycbzg8Snb4CpSaQSeFdLn0IxNssgP6Dnw9qG2d5sSLsJzcrwvNNylVELuUEJXJMJL3oQIIw/exec",
  "revenue": "https://script.google.com/macros/s/AKfycbzWVNtFUhblmEYPPj52NXiRG32CvMyp8IFNdytnGJIrdwMx1i7w5OadNpmHBtBv79k8/exec",
  "bin": "https://script.google.com/macros/s/AKfycbyKRpmZ_nhtJlMHDtNiCTto6QY7R6sSI-Ak2YzGzjKZkxFHkQu3GLrbLnwg-k3RCDJ9/exec",
  "line": "https://account.line.biz/login?redirectUri=https%3A%2F%2Faccount.line.biz%2Foauth2%2Fcallback%3Fclient_id%3D10%26code_challenge%3DTTjF5oLCE4UqopxQN9WaCQpEWu84W6780Y2r9kDbEpQ%26code_challenge_method%3DS256%26redirect_uri%3Dhttps%253A%252F%252Fmanager.line.biz%252Fapi%252Foauth2%252FbizId%252Fcallback%26response_type%3Dcode%26state%3DOu09AR52tdUkPAIQodCh0AVMSazmf5Xp",
  "equipment": "https://script.google.com/macros/s/AKfycbwRXv5oozXHg5R6wXryZARbqXEzuWGaRxd9cF-JQ8DLPALhMkZM4dyu-D8EEcs4zgZjvA/exec"
};

const SERVICE_TITLES = {
  "staff": "ระบบท้องถิ่นดิจิทัล One Stop Service สำหรับเจ้าหน้าที่",
  "citizen": "ระบบท้องถิ่นดิจิทัล One Stop Service สำหรับประชาชน",
  "cdp": "แพลตฟอร์มข้อมูลเมือง CDP",
  "waste": "ระบบจัดการค่าธรรมเนียมขยะ",
  "revenue": "ระบบทะเบียนคุมรายได้",
  "bin": "ระบบแจ้งเตือนถังขยะเต็ม Smart Bin Alert",
  "line": "Line OA",
  "equipment": "ระบบทะเบียนคุมครุภัณฑ์ เทศบาลตำบลคลองตำหรุ"
};

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Smart City Klongtumru | เทศบาลตำบลคลองตำหรุ')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ส่งเฉพาะข้อมูลลิงก์ ไม่มีฟังก์ชันแก้ไขลิงก์จากหน้าเว็บ
function getPortalData() {
  return Object.keys(SERVICE_TITLES).map(function(id) {
    var url = String(LINKS[id] || '').trim();
    return {
      id: id,
      title: SERVICE_TITLES[id],
      url: /^https:\/\/[^\s]+$/i.test(url) ? url : ''
    };
  });
}
