function toggleSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.computedStyleMap.display = 'none';
  });

  const selectionSection = document.getElementById(sectionId);
  if(selectionSection) {
    selectionSection.style.display = 'block';
  }
}

function goToMainPage() {
  window.location.href = "index.html";
}

function toggleSection(sectionId) {
  var urlParms = new URLSearchParams(window.location.search);
  var currentPage = urlParms.get('section');

  if (currentPage === 'about') {
    // Hiide all sections except for the About section
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });

    var aboutSection = document.getElementById(sectionId);
    if (aboutSection) {
      aboutSection.style.display = 'block';
    }
  }
}


function search() {
  // Get the value entered by the user in the search box
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
  // Perform the search logic based on your requirements
  // Here you can use the searchTerm to search through your content
  // For demonstration, let's just log the search term to the console
  console.log('Search Term:', searchTerm);
}
