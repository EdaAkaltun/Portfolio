$(".image-description__title").on("click", function () {
	$(this).toggleClass("image-description__title--open");
	$(this)
		.next(".image-description__details")
		.toggleClass("image-description__details--open");
});