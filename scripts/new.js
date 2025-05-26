import { news } from './objectForCinema.js';

document.addEventListener('DOMContentLoaded', function() {
    // Get all news items on the index page
    const newsItems = document.querySelectorAll('.news-item');
    console.log(newsItems);
    
    // Add click event listener to each news item
    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the news ID from the data attribute
            const newsId = this.getAttribute('data-id');
            
            // Navigate to detail-new.html instead of detail.html with the ID as parameter
            window.location.href = `newDetail.html?id=${newsId}`;
        });
    });
    
    // Handle the detail page loading
    if (window.location.pathname.includes('newDetail.html')) {
        loadNewsDetail();
    }

    // Handle pagination
    const pageNext = document.querySelector('.page-next');
    const pagePrev = document.querySelector('.page-prev');
    
    // Get current page from URL or default to 1
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1;
    const itemsPerPage = 8; // Number of news items per page
    const totalItems = Object.keys(news).length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Update page title based on current page
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        if (currentPage > 1) {
            pageTitle.textContent = `Tin tức - Trang ${currentPage}`;
        } else {
            pageTitle.textContent = 'Tin tức';
        }
    }

    // Update pagination links
    if (pageNext) {
        if (currentPage < totalPages) {
            pageNext.href = `new.html?page=${currentPage + 1}`;
            pageNext.style.display = 'inline-block';
            
            // Add click event listener for the next button
            pageNext.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = this.href;
            });
        } else {
            pageNext.style.display = 'none';
        }
    }

    if (pagePrev) {
        if (currentPage > 1) {
            pagePrev.href = `new.html?page=${currentPage - 1}`;
            pagePrev.style.display = 'inline-block';
            
            // Add click event listener for the prev button
            pagePrev.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = this.href;
            });
        } else {
            pagePrev.style.display = 'none';
        }
    }

    // Load news items for current page
    loadNewsItems(currentPage, itemsPerPage);
});

// Function to load news items for a specific page
function loadNewsItems(page, itemsPerPage) {
    const newsGrid = document.querySelector('.news-grid');
    if (!newsGrid) return;

    // Calculate start and end indices
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Clear existing items
    newsGrid.innerHTML = '';

    // Get news items for current page
    const newsItems = Object.entries(news)
        .slice(startIndex, endIndex)
        .map(([id, data]) => {
            return `
                <div class="news-item" data-id="${id}">
                    <div class="news-image">
                        <img src="${data.images[0].src}" alt="${data.title}">
                    </div>
                    <div class="news-date">${data.date}</div>
                    <h3 class="news-title">${data.title}</h3>
                </div>
            `;
        });

    // Add items to grid
    newsGrid.innerHTML = newsItems.join('');

    // Reattach click event listeners
    const newItems = document.querySelectorAll('.news-item');
    newItems.forEach(item => {
        item.addEventListener('click', function() {
            const newsId = this.getAttribute('data-id');
            window.location.href = `detail-new.html?id=${newsId}`;
        });
    });
}

// Function to load news detail content based on URL parameter
function loadNewsDetail() {
    // Get the news ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');
    
    console.log(`Loading news ID: ${newsId}`);
    
    // Check if we have the news data
    if (newsId && news && news[newsId]) {
        // Load the content
        const newsItem = news[newsId];
        populateNewsDetail(newsItem, newsId);
    } else {
        // Handle error - article not found
        showNewsNotFound();
    }
}

// Function to populate the detail page with news content
function populateNewsDetail(newsItem, newsId) {
    // Set the page title
    document.title = newsItem.title + ' - Trung tâm Chiếu phim Quốc gia';
    
    // Update the article title
    const titleElement = document.querySelector('.detail-title');
    if (titleElement) {
        titleElement.textContent = newsItem.title;
    }
    
    // Update the introduction
    const introElement = document.querySelector('.news-intro');
    if (introElement && newsItem.intro) {
        introElement.textContent = newsItem.intro;
    }
    
    // Add images to the gallery
    const galleryElement = document.getElementById('news-gallery');
    if (galleryElement && newsItem.images && newsItem.images.length > 0) {
        galleryElement.innerHTML = ''; // Clear loading placeholder
        
        // Add each image with caption
        newsItem.images.forEach(image => {
            const figure = document.createElement('figure');
            figure.className = 'news-figure';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.caption || 'News image';
            
            const figcaption = document.createElement('figcaption');
            figcaption.textContent = image.caption || '';
            
            figure.appendChild(img);
            figure.appendChild(figcaption);
            galleryElement.appendChild(figure);
        });
    }
    
    // Add paragraphs to the news text
    const textElement = document.getElementById('news-text');
    if (textElement && newsItem.paragraphs && newsItem.paragraphs.length > 0) {
        textElement.innerHTML = ''; // Clear loading placeholder
        
        // Add each paragraph
        newsItem.paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            textElement.appendChild(p);
        });
    }
    
    // Add related news links
    const relatedNewsElement = document.getElementById('related-news-list');
    if (relatedNewsElement && newsItem.relatedNews && newsItem.relatedNews.length > 0) {
        relatedNewsElement.innerHTML = ''; // Clear any existing content
        
        // Add each related news item as a link
        newsItem.relatedNews.forEach(relatedItem => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `detail-new.html?id=${relatedItem.id}`;
            a.textContent = relatedItem.title;
            a.addEventListener('click', function(e) {
                // If it's the same page, prevent default and reload the content
                if (newsId === relatedItem.id.toString()) {
                    e.preventDefault();
                    return;
                }
                
                // Add animation for smoother transition between articles
                document.querySelector('.news-detail').style.opacity = '0.5';
            });
            
            li.appendChild(a);
            relatedNewsElement.appendChild(li);
        });
    }
    
    // Update browser history
    if (window.history && window.history.replaceState) {
        window.history.replaceState(
            { newsId: newsId }, 
            newsItem.title,
            window.location.href
        );
    }
    
    // Add fade-in animation
    const detailContent = document.querySelector('.news-detail');
    if (detailContent) {
        detailContent.style.opacity = '0';
        detailContent.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            detailContent.style.opacity = '1';
        }, 100);
    }
    
    // Add social share functionality
    setupSocialSharing(newsItem.title);
}

// Function to show error when news article is not found
function showNewsNotFound() {
    const container = document.getElementById('news-content-container');
    if (container) {
        container.innerHTML = `
            <h1 class="detail-title">Bài viết không tồn tại</h1>
            <div class="news-content">
                <p>Xin lỗi, bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                <p><a href="new.html" class="btn btn-fill">Quay lại trang tin tức</a></p>
            </div>
        `;
    }
    
    document.title = 'Bài viết không tồn tại - Trung tâm Chiếu phim Quốc gia';
}

// Function to setup social sharing buttons
function setupSocialSharing(title) {
    const shareButtons = document.querySelectorAll('.share-btn');
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(title);
    
    shareButtons.forEach(button => {
        if (button.classList.contains('facebook')) {
            button.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        } else if (button.classList.contains('twitter')) {
            button.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
        } else if (button.classList.contains('email')) {
            button.href = `mailto:?subject=${pageTitle}&body=${pageUrl}`;
        }
        
        // Open share links in a popup window
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, 'share-popup', 'width=600,height=400');
        });
    });
} 