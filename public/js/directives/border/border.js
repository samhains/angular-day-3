app.directive('borderOnHover', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
			element.on('mouseenter', function(){
				element.addClass('bordered');
			});
			element.on('mouseleave', function(){
				element.removeClass('bordered');
			});
		}
	};
});