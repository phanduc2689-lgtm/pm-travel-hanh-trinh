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

Mở trình duyệt: http://localhost:8080

`npm install` tải Three.js và ghép `game/chunk-*.txt` thành `index.html`, rồi copy engine vào `vendor/three.module.js`. `npm start` làm lại bước ghép nếu thiếu file.

Nếu sau khi cài mà chưa có `index.html` (máy tắt script cài đặt), chạy thêm:

```bash
node scripts/prepare.mjs
npm start
```

Không mở `index.html` bằng double-click. Trình duyệt chặn ES module khi mở dạng `file://`.

## Cách chơi

- Tạo nhân vật (tên, giới tính, trang phục) rồi bấm **BẮT ĐẦU**.
- Máy tính: **W A S D** di chuyển, **Shift** chạy, chuột nhìn quanh. **A** quẹo trái, **D** quẹo phải.
- Điện thoại: nút trái/phải và chạy ở góc dưới.
- Bước tới cổng trên sa bàn để vào Tây Bắc, Bắc Bộ, Miền Trung, Tây Nguyên, Miền Tây.
- Tiến độ lưu trong trình duyệt (localStorage).

## Không muốn dùng npm để mở máy chủ

Sau khi đã có `index.html` và thư mục `vendor/`:

```bash
python -m http.server 8080
```
