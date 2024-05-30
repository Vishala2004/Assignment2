document.addEventListener('DOMContentLoaded', (event) => {
    
    const contactButton = document.querySelector('#contactButton');
    const contactModal = document.querySelector('#contactModal');
    const closeModalButton = document.querySelector('.close-modal');

    if (contactButton && contactModal && closeModalButton) {
        contactButton.addEventListener('click', () => {
            contactModal.style.display = 'block';
        });

        closeModalButton.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
    }

    
    const bookCards = document.querySelectorAll('.card');

    bookCards.forEach(card => {
        const viewDetailsButton = card.querySelector('.view-details');
        const addToCartButton = card.querySelector('.add-to-cart');

        if (viewDetailsButton) {
            viewDetailsButton.addEventListener('click', () => {
                alert('View Details clicked for ' + card.querySelector('.card-title').innerText);
            });
        }

        if (addToCartButton) {
            addToCartButton.addEventListener('click', () => {
                alert('Add to Cart clicked for ' + card.querySelector('.card-title').innerText);
            });
        }
    });
});
