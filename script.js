  // contact me -->

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    // Replace with your Formspree form endpoint
    const FORMSPREE_URL = "https://formspree.io/f/mnnzboqa";

    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // stop page reload

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      try {
        const formData = new FormData(form);
        const response = await fetch(FORMSPREE_URL, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          status.textContent = "✅ Message sent successfully!";
          status.className = "text-green-400 text-center mt-3";
          form.reset();
        } else {
          status.textContent = "❌ Something went wrong. Please try again.";
          status.className = "text-red-400 text-center mt-3";
        }
      } catch (error) {
        status.textContent = "❌ Network error. Please try again.";
        status.className = "text-red-400 text-center mt-3";
      }

      status.classList.remove("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    });
  });
  //  contact me end --->


  // corosel --->
  function initCarousel(slidesId, dotsId, descId, prevBtnId, nextBtnId, descriptions) {
    const slides = document.getElementById(slidesId);
    const slideCount = slides.children.length;
    const dots = document.querySelectorAll(`#${dotsId} button`);
    const desc = document.getElementById(descId);

    let index = 0;
    let autoPlay;

    function showSlide(i) {
      index = (i + slideCount) % slideCount;
      slides.style.transform = `translateX(-${index * 100}%)`;

      dots.forEach((dot, idx) => {
        dot.classList.toggle("bg-blue-400", idx === index);
        dot.classList.toggle("bg-slate-500", idx !== index);
      });

      desc.textContent = descriptions[index];
    }

    function startAutoPlay() {
      autoPlay = setInterval(() => showSlide(index + 1), 3000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlay);
    }

    document.getElementById(prevBtnId).addEventListener("click", () => showSlide(index - 1));
    document.getElementById(nextBtnId).addEventListener("click", () => showSlide(index + 1));

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => showSlide(idx));
    });

    showSlide(0);
    startAutoPlay();

    slides.parentElement.addEventListener("mouseenter", stopAutoPlay);
    slides.parentElement.addEventListener("mouseleave", startAutoPlay);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initCarousel(
      "experience-carousel-slides", "experience-carousel-dots", "experience-carousel-desc",
      "experience-prev-btn", "experience-next-btn",
      [
        "Carousel 1 - Slide 1 description",
        "Carousel 1 - Slide 2 description",
        "Carousel 1 - Slide 3 description"
      ]
    );

    initCarousel(
      "projects-carousel-slides", "projects-carousel-dots", "projects-carousel-desc",
      "projects-prev-btn", "projects-next-btn",
      [
        "Carousel 2 - Slide 1 description",
        "Carousel 2 - Slide 2 description",
        "Carousel 2 - Slide 3 description"
      ]
    );
  });

  // corousel end -->

  // readmore
  const limit = 30; // word limit
  document.querySelectorAll('.readmore').forEach(paragraph => {
    const words = paragraph.innerHTML.split(' ');
    if (words.length > limit) {
      const visible = words.slice(0, limit).join(' ');
      const hidden = words.slice(limit).join(' ');
      paragraph.innerHTML = `${visible}<span class="hidden"> ${hidden}</span> <button class="toggle text-blue-400 hover:underline">Read More</button>`;
    }
  });

  document.addEventListener('click', e => {
    if (e.target.classList.contains('toggle')) {
      const span = e.target.previousElementSibling;
      span.classList.toggle('hidden');
      e.target.textContent = span.classList.contains('hidden') ? 'Read More' : 'Read Less';
    }
  });

  // corousel config<script>


  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });