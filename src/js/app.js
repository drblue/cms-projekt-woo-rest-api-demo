(function($){
	$(document).ready(() => {
		const authUser = 'ck_597486ca187ae2d511b0e7429040d1f312430c62',
			  authPassword = 'cs_df8406d18ac6e55dcb01034b49f375dae41873b8';

		//const authEncoded = window.btoa(authUser + ':' + authPassword);
		const authEncoded = window.btoa(`${authUser}:${authPassword}`);

		console.log("encoded auth", authEncoded);

	});
})(jQuery);
