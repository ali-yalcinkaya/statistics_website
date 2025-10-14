// Bu dosya, blog.html sayfasında hangi yazıların görüneceğini kontrol eder.
// Yeni bir yazı eklediğinizde, bu listeye yeni bir kayıt eklemeniz yeterlidir.

const blogPosts = [
    {
        url: 'blog_yazilari/ilk-yazimiz.html',
        image: 'https://placehold.co/600x400/667eea/ffffff?text=İstatistik',
        alt: 'Doğru istatistiksel test seçimi',
        date: '15 Ekim 2025',
        title: 'Teziniz İçin Doğru İstatistiksel Testi Nasıl Seçersiniz?',
        excerpt: 'Araştırma sorunuza ve veri tipinize en uygun istatistiksel testi seçmek, sonuçlarınızın güvenilirliği için kritiktir. Bu yazıda temel test seçim adımlarını inceliyoruz...',
        tags: ['Tez', 'Metodoloji']
    },
    {
        url: 'blog_yazilari/spss-veri-temizligi.html',
        image: 'https://placehold.co/600x400/764ba2/ffffff?text=SPSS',
        alt: 'SPSS Veri Temizliği',
        date: '01 Ekim 2025',
        title: 'SPSS\'te Veri Temizliği: En Sık Yapılan 5 Hata',
        excerpt: 'Analize başlamadan önce verilerinizi doğru bir şekilde hazırlamak, yanıltıcı sonuçlardan kaçınmanın ilk adımıdır. İşte en sık yapılan veri temizliği hataları ve çözümleri...',
        tags: ['SPSS', 'Veri Hazırlama']
    },
    {
        url: 'blog_yazilari/r-ile-gorsellestirme.html', // Bu örnek bir yazıdır
        image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=R+Programlama',
        alt: 'R Programlama ile Veri Görselleştirme',
        date: '25 Eylül 2025',
        title: 'R ile Etkileyici Veri Görselleştirme Teknikleri',
        excerpt: 'ggplot2 paketi kullanarak akademik yayın kalitesinde grafikler oluşturmanın temelleri. Verilerinizi hikayeye dönüştürün.',
        tags: ['R', 'Veri Görselleştirme']
    }
    // YENİ BİR YAZI EKLEDİĞİNİZDE, YUKARIDAKİ GİBİ BİR {} BLOĞUNU KOPYALAYIP
    // VİRGÜLLE AYIRARAK BURAYA EKLEYİN.
];

