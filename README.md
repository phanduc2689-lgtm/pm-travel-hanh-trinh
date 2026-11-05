# PM Travel – Hành Trình Di Sản

Game 3D du lịch di sản Việt Nam (chibi, 5 vùng, hộ chiếu tem, mini-game). Chạy trên máy của bạn bằng Node.js.

## Cần có

- [Node.js](https://nodejs.org/) 18 trở lên (kèm npm)

## Chạy local

```bash
git clone https://github.com/phanduc2689-lgtm/pm-travel-hanh-trinh.git
cd pm-travel-hanh-trinh
npm install
npm start
```

Mở trình duyệt: [http://localhost:8080](http://localhost:8080)

`npm install` tự copy Three.js r170 vào `vendor/three.module.js`. Không mở file `index.html` bằng double-click — trình duyệt chặn ES module khi mở dạng `file://`.

## Cách chơi

- Tạo nhân vật (tên, giới tính, trang phục) rồi bấm **BẮT ĐẦU**.
- Máy tính: **W A S D** di chuyển, **Shift** chạy, chuột nhìn quanh. **A** quẹo trái, **D** quẹo phải.
- Điện thoại: nút trái/phải và chạy ở góc dưới.
- Bước tới cổng trên sa bàn để vào Tây Bắc, Bắc Bộ, Miền Trung, Tây Nguyên, Miền Tây.
- Tiến độ lưu trong trình duyệt (localStorage).

## Không có Node?

Sau khi đã có thư mục `vendor/` (từ máy cài Node), có thể chạy:

```bash
python -m http.server 8080
```
