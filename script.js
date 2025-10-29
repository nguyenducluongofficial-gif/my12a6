let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const pageInfo = document.querySelector(".page-info");
const totalSlides = slides.length;

// Lấy các phần tử cần reset animation
const imageTitleElement = document.getElementById("imageTitle"); 


// Khởi tạo trình chiếu tự động
showSlides();

function showSlides() {
  // 1. Quản lý Trình chiếu Ô Nhỏ (Slider Box)
  
  // Ẩn tất cả các slide
  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.remove("active-slide");
  }
  
  // Tăng index cho slide tiếp theo
  slideIndex++;
  if (slideIndex > totalSlides) {
    slideIndex = 1; // Quay về ảnh 1 sau khi hết 7 ảnh
  }    
  
  // Hiển thị slide hiện tại
  slides[slideIndex - 1].classList.add("active-slide");
  
  // Cập nhật thông tin trang
  pageInfo.textContent = `Khoảnh Khắc Đáng Nhớ (${slideIndex}/${totalSlides})`;
  
  
  // 2. Quản lý Hiệu ứng Ô Lớn (Large Image Box) - Cố định ảnh
  
  // Ảnh lớn sẽ chạy animation zoom liên tục, không bị ngắt quãng.
  
  // Reset animation nhấp nháy của chữ "My 12A6 !"
  if (imageTitleElement) {
      imageTitleElement.style.animation = 'none';
      imageTitleElement.offsetHeight; 
      imageTitleElement.style.animation = null; 
      imageTitleElement.style.animation = 'blinkText 2s infinite alternate';
  }
  
  // 3. Tự động chuyển đổi sau 4 giây (4000ms)
  setTimeout(showSlides, 4000); 
}

// Chức năng điều hướng thủ công (khi click nút)
function plusSlides(n) {
    // Tạm dừng timer của showSlides để tránh xung đột
    clearTimeout(showSlides); 

    // Tính toán index mới
    slideIndex += n; 

    // Điều chỉnh giới hạn
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = totalSlides;
    }
    
    // Giảm slideIndex đi 1 vì hàm showSlides() sẽ tự tăng 1 ngay khi chạy
    slideIndex--;

    // Chạy lại hàm showSlides để cập nhật trạng thái
    showSlides();
}

// Liên kết nút với chức năng
document.querySelector(".prev-btn").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next-btn").addEventListener("click", () => plusSlides(1));