(function($){
	$(document).ready(() => {
		const authUser = 'ck_597486ca187ae2d511b0e7429040d1f312430c62',
			  authPassword = 'cs_df8406d18ac6e55dcb01034b49f375dae41873b8';

		const authEncoded = window.btoa(`${authUser}:${authPassword}`);

		$.ajax({
			'method': 'GET',
			'url': 'https://woo.test/wp-json/wc/v3/products/?on_sale=true',
			'headers': {
				'Authorization': `Basic ${authEncoded}`,
			},
		})
		.done((data) => {
			// hide spinner
			$('.spinner').hide();

			// loop over every product in response
			data.forEach((product) => {
				const imgSrc = product.images.length > 0 ? product.images[0].src : '';

				/*
				var imgsrc = '';
				if (product.images.length > 0) {
					imgsrc = product.images[0].src;
				}
				*/

				// append name of product to .products
				$('.products').append(`
					<div class="product col-sm-6 col-md-3">
						<a href="${product.permalink}">
							<img src="${imgSrc}">
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
			});
		})
		.fail((err) => {
			console.error("something went very wrong", err);
		});

		$.ajax({}).done().fail();
	});
})(jQuery);
