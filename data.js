// data.js - ไฟล์สำหรับแก้ไขข้อมูลแร่และรูปภาพ
// วิธีใส่รูป: ให้ใส่ Link รูปภาพจากเว็บ หรือ ชื่อไฟล์รูปภาพในเครื่อง (เช่น "iron.png")

const oreDatabase = [
    {
        name: "Iron (เหล็ก)",
        img: "https://forgewiki.org/images/thumb/a/a6/Iron_Ingot.png/120px-Iron_Ingot.png" 
    },
    {
        name: "Gold (ทอง)",
        img: "https://forgewiki.org/images/thumb/d/d1/Gold_Ingot.png/120px-Gold_Ingot.png"
    },
    {
        name: "Copper (ทองแดง)",
        img: "https://forgewiki.org/images/thumb/f/f3/Copper_Ingot.png/120px-Copper_Ingot.png"
    },
    {
        name: "Tin (ดีบุก)",
        img: "https://via.placeholder.com/50/cccccc/000000?text=Tin" // ตัวอย่างถ้าไม่มีรูป
    },
    {
        name: "Bronze (สัมฤทธิ์)",
        img: "https://via.placeholder.com/50/cd7f32/ffffff?text=Bronze"
    },
    // คุณสามารถก๊อปปี้ { ... }, ด้านบนมาวางต่อท้ายเพื่อเพิ่มแร่ได้เรื่อยๆ
    {
        name: "Void Metal",
        img: "https://via.placeholder.com/50/330066/ffffff?text=Void"
    }
];