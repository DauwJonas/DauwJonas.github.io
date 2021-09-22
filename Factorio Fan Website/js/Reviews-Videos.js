(function() {
    'use strict';

    document.getElementById("NSFWReviewsButtonShow").addEventListener("click", function() {
        let El = document.getElementById("NSFWReviews");
        El.parentElement.removeChild(El);
        El = document.getElementsByClassName("NSFW");
        while (El.length != 0) {
            El[0].classList.remove("NSFW");
        }
    });
})();