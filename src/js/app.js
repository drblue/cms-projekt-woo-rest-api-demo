(function($){

	$(document).ready(() => {
		const
			apiBaseUrl = 'https://woo.test/',
			authKey = 'ck_ca0af09788c65d21e48491f30abcc7ccfcde9006',
			authSecret = 'cs_8c70513d259e3b7e9a3a5a616f288b6b6ce2bffc',
			authEncoded = window.btoa(`${authKey}:${authSecret}`);

		console.log("Ready!");
		console.log('document.ready', $);

		$.ajax({
			'method': 'GET',
			'url': `${apiBaseUrl}/wp-json/wc/v3/products/?on_sale=true`,
			'headers': {
				"Authorization": `Basic ${authEncoded}`,
			},
		})
		.done((data) => {
			console.log("success getting products", data);
			data.forEach(product => {
				$('.spinner').hide();

				let productImage = (Array.isArray(product.images) && product.images.length > 0) ? product.images[0].src : '';
				$('.products').append(`
					<div class="product col-md-3">
						<a href="${product.permalink}">
							<img class="product-image" src="${productImage}">
							<h4 class="product-title">${product.name}</h4>
							<div class="product-meta">
								${product.short_description}
							</div>
							<div class="product-price">
								${product.price_html}
							</div>
						</a>
					</div>
				`);
			})
		})
		.fail((err) => {
			console.error("error getting products", err);
		});
	});

})(jQuery);
