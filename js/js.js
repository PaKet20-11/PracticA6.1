jQuery(document).ready(function($){
	let btn1 = $('.btn-1');
	let btn3 = $('.btn-3');
	let btn7 = $('.btn-7');
	let progressBar = $('.progress-bar');
  	let progress = $('.progress');
  	let progressWidth = progress.width();
	let progressChanged = 0;

	const plus1 = progressWidth * 0.01;
	const plus3 = progressWidth * 0.03;
	const plus7 = progressWidth * 0.07;

	btn1.click(function()
	{
		progressChanged += plus1;
		progressBar.width(progressChanged)
	}); 

	btn3.click(function()
	{
		progressChanged += plus3;
		progressBar.width(progressChanged)
	}); 

	btn7.click(function()
	{
		progressChanged += plus7;
		progressBar.width(progressChanged)
	}); 


});
