(function (window) {
	let svgSprite =
		'<svg>' +
		'' +
		'<symbol id="icon-tuichu" viewBox="0 0 1024 1024">' +
		'' +
		'<path d="M891.215448 714.840276c-24.275862 0-35.133793 19.667862-35.133793 43.926069l-0.088276 58.579862c-6.779586 33.227034-25.811862 46.362483-66.59531 49.716966l-568.125793 0.300138c-35.098483-4.272552-49.558069-17.831724-54.501517-49.469793l0.653241-604.318897c3.742897-32.114759 15.642483-46.962759 46.238897-52.524138l593.672828-0.317793c30.296276 6.249931 44.314483 21.910069 48.904828 54.377931l-0.141241 49.257931c0 24.275862 10.857931 43.926069 35.133793 43.926069 24.240552 0 34.868966-19.667862 34.868966-43.926069l0.300138-93.854897c-2.807172-45.868138-40.448-82.290759-86.987034-82.449655l-658.696828 0.353103C134.144 90.465103 96.926897 128.441379 96.697379 175.457103l0.370759 676.652138c2.065655 45.267862 38.170483 81.37269 83.42069 83.456l649.057103 0.406069 9.533793 0c47.298207 0 85.556966-37.428966 87.463724-84.250483l0.123586-92.936828C926.649379 734.525793 915.456 714.840276 891.215448 714.840276zM706.56 715.105103c11.723034 11.723034 35.169103 15.536552 47.280552 3.425103l165.005241-165.393655c6.426483-6.426483 8.492138-16.384 7.362207-26.07669-0.158897-6.232276-1.959724-12.111448-5.66731-16.807724-1.253517-2.048-2.665931-3.937103-4.272552-5.543724-1.112276-1.094621-2.401103-2.030345-3.707586-2.966069l-158.631724-159.002483c-12.111448-12.111448-36.422621-9.445517-48.145655 2.277517-11.687724 11.723034-14.689103 36.334345-2.577655 48.428138l100.175448 100.404966L542.455172 493.638621c-17.143172 0-39.000276 15.607172-39.000276 35.998897 0 21.53931 21.857103 35.716414 39.000276 35.716414l262.69131 0.211862-102.029241 102.258759C691.005793 679.936 694.81931 703.382069 706.56 715.105103z"  ></path>' +
		'' +
		'</symbol>' +
		'' +
		'</svg>';
	const script = (function () {
		const scripts = document.getElementsByTagName('script');
		return scripts[scripts.length - 1];
	})();
	const shouldInjectCss = script.getAttribute('data-injectcss');
	const ready = function (fn) {
		if (document.addEventListener) {
			if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
				setTimeout(fn, 0);
			} else {
				var loadFn = function () {
					document.removeEventListener('DOMContentLoaded', loadFn, false);
					fn();
				};
				document.addEventListener('DOMContentLoaded', loadFn, false);
			}
		} else if (document.attachEvent) {
			IEContentLoaded(window, fn);
		}

		function IEContentLoaded(w, fn) {
			const d = w.document;
			let done = false;
			const init = function () {
				if (!done) {
					done = true;
					fn();
				}
			};
			var polling = function () {
				try {
					d.documentElement.doScroll('left');
				} catch (e) {
					setTimeout(polling, 50);
					return;
				}
				init();
			};
			polling();
			d.onreadystatechange = function () {
				if (d.readyState == 'complete') {
					d.onreadystatechange = null;
					init();
				}
			};
		}
	};
	const before = function (el, target) {
		target.parentNode.insertBefore(el, target);
	};
	const prepend = function (el, target) {
		if (target.firstChild) {
			before(el, target.firstChild);
		} else {
			target.appendChild(el);
		}
	};

	function appendSvg() {
		let div;
		let svg;
		div = document.createElement('div');
		div.innerHTML = svgSprite;
		svgSprite = null;
		svg = div.getElementsByTagName('svg')[0];
		if (svg) {
			svg.setAttribute('aria-hidden', 'true');
			svg.style.position = 'absolute';
			svg.style.width = 0;
			svg.style.height = 0;
			svg.style.overflow = 'hidden';
			prepend(svg, document.body);
		}
	}
	if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
		window.__iconfont__svg__cssinject__ = true;
		try {
			document.write(
				'<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
			);
		} catch (e) {
			console && console.log(e);
		}
	}
	ready(appendSvg);
})(window);
