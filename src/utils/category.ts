export const categoryImage = (category: string) => {
    switch (category) {
        case 'electronics': return 'https://img.freepik.com/free-photo/desk-and-gadgets_181624-23300.jpg?w=1380&t=st=1719569792~exp=1719570392~hmac=e012bbf38678a82e99a258158dcd4b71788fd55c9dbf154528d6e336f70a0f7c';
        case 'jewelery': return 'https://gagaru.club/uploads/posts/2023-02/1675871547_gagaru-club-p-serebro-krasivoe-pinterest-18.jpg';
        case `men's clothing`: return 'https://i.pinimg.com/originals/37/2d/91/372d91fe6b87fdb9e8afa57ac7769ad4.jpg';
        case `women's clothing`: return 'https://dosmarco.ru/wp-content/uploads/2022/08/genskaya-odejda.jpg'
    
        default:
            return 'https://cs5.pikabu.ru/post_img/big/2015/06/25/7/1435228793_1097179331.png'
        
    }
}