// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Project modal functionality
const projectDetails = {
    'dog-breed': {
        title: 'Dog Breed Identification',
        description: `
            <h3>Project Overview</h3>
            <p>A deep learning project that identifies dog breeds from images using Convolutional Neural Networks (CNN) and PyTorch.</p>
            
            <h3>Technologies Used</h3>
            <ul>
                <li>PyTorch</li>
                <li>OpenCV</li>
                <li>Matplotlib</li>
                <li>CNN Architecture</li>
            </ul>
            
            <h3>Key Features</h3>
            <ul>
                <li>Real-time breed identification</li>
                <li>High accuracy classification</li>
                <li>Support for multiple dog breeds</li>
                <li>Visual result presentation</li>
            </ul>
            
            <div class="project-images">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1" alt="Dog Breed Project">
                <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e" alt="Dog Breed Analysis">
            </div>
        `,
    },
    'chatgpt': {
        title: 'ChatGPT Clone',
        description: `
            <h3>Project Overview</h3>
            <p>A web-based chat interface that integrates with the ChatGPT API to provide AI-powered conversations.</p>
            
            <h3>Technologies Used</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>ChatGPT API</li>
            </ul>
            
            <h3>Key Features</h3>
            <ul>
                <li>Real-time chat interface</li>
                <li>Message history</li>
                <li>Response streaming</li>
                <li>Mobile-responsive design</li>
            </ul>
            
            <div class="project-images">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" alt="ChatGPT Interface">
                <img src="https://images.unsplash.com/photo-1676299081847-c0326a0333d5" alt="Chat Interaction">
            </div>
        `,
    },
    'music-app': {
        title: 'Music App Interface',
        description: `
            <h3>Project Overview</h3>
            <p>A modern music application interface designed in Figma with interactive elements and user-friendly navigation.</p>
            
            <h3>Design Elements</h3>
            <ul>
                <li>Custom playlist management</li>
                <li>Interactive music player</li>
                <li>User profile customization</li>
                <li>Seamless navigation flow</li>
            </ul>
            
            <h3>Key Features</h3>
            <ul>
                <li>Dark mode interface</li>
                <li>Gesture-based interactions</li>
                <li>Animated transitions</li>
                <li>Responsive layouts</li>
            </ul>
            
            <div class="project-images">
                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745" alt="Music App Interface">
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04" alt="Music Player">
            </div>
        `,
    },
};

function openProject(projectId) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const project = projectDetails[projectId];
    
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        ${project.description}
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});