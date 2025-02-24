<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h3>Contact Us</h3>
                <ul class="contact-list">
                    <li><span class="icon">📍</span><span class="text">Jl. Galanggang No 109 Batujajar- Bandung Barat
                            40561</span></li>
                    <li><span class="icon">&#x2709;</span><span class="text">mja@marierjayaabadi.com</span></li>
                    <li><span class="icon">📞</span><span class="text">+62 822-1192-8800</span></li>
                </ul>
            </div>

            <div class="footer-section">
            </div>
            
            <div class="footer-section">
                <h3>Follow Us</h3>
                <ul class="social-icons">
                    <li><a target="_blank" href="https://www.facebook.com/share/16CLFKuHLg/"><i class="fab fa-facebook"></i> Facebook</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/marierjayaabadi?igsh=MXhidzlnNTBlZXo0ZQ== "><i class="fab fa-instagram"></i> Instagram</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/marier-jaya-abadi-1641102a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                    <li><a target="_blank" href="https://www.tiktok.com/@marierjayaabadi?_t=ZS-8ti8gWdyU23&_r=1"><i class="fab fa-tiktok"></i> Tiktok</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 PT. Marier Jaya Abadi. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
* {
    font-size: 13px;
}

.footer {
    background-color: #0047AB;
    color: #fff;
    padding: 2rem;
    text-align: left;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
}

.footer-section {
    flex: 1;
    min-width: 200px;
}

.footer-section h3 {
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section li {
    margin: 0.5rem 0;
}

.footer-section .icon {
    margin-right: 0.5rem;
    color: white;
}

.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.contact-list li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

.icon {
    min-width: 2rem;
    text-align: center;
    font-size: 1.5rem;
}

.text {
    flex: 1;
}

.social-icons {
    display: flex;
    flex-direction: column;
}

.social-icons li {
    margin: 0.5rem 0;
}

.social-icons a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.social-icons a i {
    margin-right: 0.5rem;
}

.footer-bottom {
    border-top: 1px solid #555;
    padding-top: 1rem;
    text-align: center;
    margin-top: 1rem;
}
@media(min-width: 1441px){
    *{
        font-size: 1.3rem !important;
    }
}
</style>