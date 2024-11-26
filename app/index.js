document.querySelectorAll(".love-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const icon = button.querySelector("i");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
    icon.classList.toggle("loved");
  });
});

  // Menangani penambahan tab hari baru
  document.addEventListener("DOMContentLoaded", () => {
    // Fungsi untuk menambahkan tab hari baru di setiap destinasi
    function addDayTabs(destinationId, buttonId, tabsId, contentId) {
      const addDayButton = document.getElementById(buttonId);
      const dayTabs = document.getElementById(tabsId);
      const dayTabsContent = document.getElementById(contentId);
  
      let dayCounter = 2; // Mulai dari Day 2, karena Day 1 sudah ada
  
      addDayButton.addEventListener("click", () => {
        // Tambahkan tab baru
        const newTab = document.createElement("li");
        newTab.classList.add("nav-item");
        newTab.innerHTML = `
          <button class="nav-link" id="add-day${dayCounter}-${destinationId}-tab" data-bs-toggle="tab" 
                  data-bs-target="#add-day${dayCounter}-${destinationId}" type="button" role="tab">Day ${dayCounter}</button>
        `;
        dayTabs.insertBefore(newTab, addDayButton.parentElement);
  
        // Tambahkan konten untuk tab baru
        const newTabContent = document.createElement("div");
        newTabContent.classList.add("add", "tab-pane", "fade");
        newTabContent.id = `add-day${dayCounter}-${destinationId}`;
        newTabContent.setAttribute("role", "tabpanel");
        newTabContent.innerHTML = `
          <div class="day-content">
            <h5>Pagi</h5>
            <textarea class="form-control" placeholder="Add your activity in here ..."></textarea>
            <h5>Siang</h5>
            <textarea class="form-control" placeholder="Add your activity in here ..."></textarea>
            <h5>Sore</h5>
            <textarea class="form-control" placeholder="Add your activity in here ..."></textarea>
            <h5>Malam</h5>
            <textarea class="form-control" placeholder="Add your activity in here ..."></textarea>
          </div>
        `;
        dayTabsContent.appendChild(newTabContent);
  
        // Simulasi klik untuk mengaktifkan tab baru
        const lastTab = newTab.querySelector("button");
        lastTab.addEventListener("click", () => {
          document.querySelectorAll(`#${tabsId} .nav-link`).forEach(tab => tab.classList.remove("active"));
          document.querySelectorAll(`#${contentId} .tab-pane`).forEach(content => content.classList.remove("show", "active"));
  
          lastTab.classList.add("active");
          newTabContent.classList.add("show", "active");
        });
  
        lastTab.click(); // Aktifkan tab terbaru
        dayCounter++;
      });
    }
  
    // Inisialisasi fungsi untuk masing-masing destinasi
    addDayTabs("bali", "addDayButtonBali", "add-dayTabs-bali", "dayTabsContent-bali");
    addDayTabs("bandung", "addDayButtonBandung", "add-dayTabs-bandung", "dayTabsContent-bandung");
    addDayTabs("rajaAmpat", "addDayButtonrajaAmpat", "add-dayTabs-rajaAmpat", "dayTabsContent-rajaAmpat");
    addDayTabs("yogyakarta", "addDayButtonyogyakarta", "add-dayTabs-yogyakarta", "dayTabsContent-yogyakarta");
    addDayTabs("jakarta", "addDayButtonjakarta", "add-dayTabs-jakarta", "dayTabsContent-jakarta");
    // Tambahkan rajaAmpat, yogyakarta, dan jakarta serupa
  });
  
// Profil
// signin
document.getElementById("signInLink").addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah reload halaman
    const signInModal = new bootstrap.Modal(document.getElementById("signInModal"));
    signInModal.show();
  });
// register
  document.getElementById("registerLink").addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah reload halaman
    const registerModal = new bootstrap.Modal(document.getElementById("registerModal"));
    registerModal.show();
  });