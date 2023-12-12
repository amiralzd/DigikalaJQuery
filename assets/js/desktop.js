// ---------------header-------------------

$(document).ready(function(){
	$(".show-search").click(function(e){
		e.stopPropagation();
		$(".search-container").fadeIn();
		$(".box").hide();
		$(".bg-search-hover").fadeIn();
		$("body").css({
			"overflow": "hidden",
		});
		$('.cardOne-head-box2').click(function(){
			$('.search-container-body').hide();
			$('.search-container').css({
				"height" : "100px",
			});
		});
	});
	
	$(document).click(function() {
		$(".search-container").fadeOut();
		$(".box").show();
		$(".bg-search-hover").fadeOut();
		$("body").css({
			"overflow": "auto",
		});
	});
});




// $(document).ready(function(){
// 	var owl = $('.history-responsive-body');
// 	owl.owlCarousel({
// 		items: 3,
// 		nav:true,
// 		margin:10,
// 		responsive:{
// 			0:{
// 				items:1
// 			},
// 			600:{
// 				items:3
// 			},            
// 			960:{
// 				items:5
// 			},
// 			1200:{
// 				items:6
// 			}
// 		}
// 	});
// 	owl.on('mousewheel', '.history-responsive-body', function (e) {
// 		if (e.deltaY>0) {
// 			owl.trigger('next.owl');
// 		} else {
// 			owl.trigger('prev.owl');
// 		}
// 		e.preventDefault();
// 	});
// });




// media query

$(document).ready(function(){
	if($(window).width() <= 500){
		$('.search').click(function(){
			$('.bkshadow-hover-responsive').show();
			$('.searchBox-hover-responsive').slideDown();
		});
	
		$(".searchBoxHover-icon").click(function(){
			$('.bkshadow-hover-responsive').hide();
			$('.searchBox-hover-responsive').slideUp();
		});
	
		$(".history-responsive-title-trash").click(function(){
			$('.history-responsive').hide();
		});
	}
});










$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		nav: false,
		loop: true,
		rtl: true,
		items:1,
		margin:0,
		stagePadding:0,
		smartSpeed:450,
		autoplay: 2000,
		responsive:{
			600:{
				nav: true,
			}
		}
	});
});








//---main---







// ---------------- nav ---------------------

$(document).ready(function(){
    $(".grouping-items").hover(
        function(){
            $('.grouping-items-hover-shadow').fadeIn();
            $('.grouping-items-hover').fadeIn();
            $('body').css({
				"overflow-y" : "hidden",
			});
        },function (){
            $('.grouping-items-hover').fadeOut();
            $('.grouping-items-hover-shadow').fadeOut();
			$('body').css({
				"overflow-y" : "auto",
			});
        }
    );


	$('.grouping-items-hover-shadow').hover(function(){
		$('.grouping-items-hover').fadeOut();
        $('.grouping-items-hover-shadow').fadeOut();
	});
});







$(document).ready(function(){
	$('.grouping-menu-item2').hover(function(){
		$('.grouping-menu-item1').css({
			'background':'#efefef',
		})
		$('.grouping-menu-item2').css({
			'background':'#fff',
		})
		$('.grouping-Specifications').hide();
		$('.grouping-Specifications2').show();
	});
	$('.grouping-menu-item1').hover(function(){
		$('.grouping-Specifications').show();
		$('.grouping-Specifications2').hide();
		$('.grouping-menu-item1').css({
			'background':'#fff',
		})
		$('.grouping-menu-item2').css({
			'background':'#efefef',
		})
	});
});




//scrollTop 
var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "4vw";
	document.getElementById("header").style.boxShadow = "none";
  } else {
    document.getElementById("navbar").style.top = "0";
	document.getElementById("header").style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
  }
  prevScrollpos = currentScrollPos;	
}







$(document).ready(function () {
    $(".location-text").hover(function () {
        $(".location-hover").fadeToggle();
    });
});



$(document).ready(function(){
    $('.location-text').click(function(){
        $('.back-shadow-popup').fadeIn();
        $('.location-popup').fadeIn();
        $("body").css({
            "overflow": "hidden",
        });
    });

    $('.close-location-popup').click(function(){
        $('.location-popup').fadeOut();
        $('.back-shadow-popup').fadeOut();
    });
});




$(document).ready(function(){
    $('.location-text').click(function(){
        $('.back-shadow-popup').fadeIn();
        $('.location-popup').fadeIn();
        $("body").css({
            "overflow": "hidden",
        });
    });

    $('.close-location-popup').click(function(){
        $('.location-popup').fadeOut();
        $('.back-shadow-popup').fadeOut();
    });

    $('.back-shadow-popup').click(function(){
        $('.location-popup').fadeOut();
    });
});





$(document).ready(function() {
	// State select change event handler
	$('.location-chose-state').change(function() {
		var selectedState = $(this).val();
		var selectedStateText = $(this).find('option:selected').text();
	
		// Update city options based on the selected state
		updateCityOptions(selectedState);
	
		// Clear the selected city and location text
		$('.location-chose-city').val('');
		$('.location-text').text('Selected location: ');
	});
  
	// City select change event handler
	$('.location-chose-city').change(function() {
		var selectedCity = $(this).find('option:selected').text();
		var selectedStateText = $('.location-chose-state').find('option:selected').text();
  
		// Update the selected location text
		$('.location-text').text('ارسال به ' + selectedStateText + ' , ' + selectedCity);
		$('.location-hover').text('ارسال به ' + selectedStateText + ' , ' + selectedCity);
	});
});













function irancitylist(state)
{
	with(document.getElementById('city')) 
	{
		options.length = 0;

		if(state == 0)
		{
			options[0] = new Option('لطفا استان را انتخاب نمایید' , '0');
		}
		
		if(state == 'تهران')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('احمد آباد مستوفی' , 'احمد آباد مستوفی');
			options[2] = new Option('ادران' , 'ادران');
			options[3] = new Option('اسلام آباد' , 'اسلام آباد');
			options[4] = new Option('اسلام شهر' , 'اسلام شهر');
			options[5] = new Option('اكبر آباد' , 'اكبر آباد');
			options[6] = new Option('اميريه' , 'اميريه');
			options[7] = new Option('انديشه' , 'انديشه');
			options[8] = new Option('اوشان' , 'اوشان');
			options[9] = new Option('آبسرد' , 'آبسرد');
			options[10] = new Option('آبعلی' , 'آبعلی');
			options[11] = new Option('باغستان' , 'باغستان');
			options[12] = new Option('باقر شهر' , 'باقر شهر');
			options[13] = new Option('برغان' , 'برغان');
			options[14] = new Option('بومهن' , 'بومهن');
			options[15] = new Option('پارچين' , 'پارچين');
			options[16] = new Option('پاكدشت' , 'پاكدشت');
			options[17] = new Option('پرديس' , 'پرديس');
			options[18] = new Option('پرند' , 'پرند');
			options[19] = new Option('پس قلعه' , 'پس قلعه');
			options[20] = new Option('پيشوا' , 'پيشوا');
			options[21] = new Option('تجزيه مبادلات لشكر' , 'تجزيه مبادلات لشكر');
			options[22] = new Option('تهران' , 'تهران');
			options[23] = new Option('جاجرود' , 'جاجرود');
			options[24] = new Option('چرمسازی سالاريه' , 'چرمسازی سالاريه');
			options[25] = new Option('چهار دانگه' , 'چهار دانگه');
			options[26] = new Option('حسن آباد' , 'حسن آباد');
			options[27] = new Option('حومه گلندوک' , 'حومه گلندوک');
			options[28] = new Option('خاتون آباد' , 'خاتون آباد');
			options[29] = new Option('خاوه' , 'خاوه');
			options[30] = new Option('خرمدشت' , 'خرمدشت');
			options[31] = new Option('دركه' , 'دركه');
			options[32] = new Option('دماوند' , 'دماوند');
			options[33] = new Option('رباط كريم' , 'رباط كريم');
			options[34] = new Option('رزگان' , 'رزگان');
			options[35] = new Option('رودهن' , 'رودهن');
			options[36] = new Option('ری' , 'ری');
			options[37] = new Option('سعيد آباد' , 'سعيد آباد');
			options[38] = new Option('سلطان آباد' , 'سلطان آباد');
			options[39] = new Option('سوهانک' , 'سوهانک');
			options[40] = new Option('شاهد شهر' , 'شاهد شهر');
			options[41] = new Option('شريف آباد' , 'شريف آباد');
			options[42] = new Option('شمس آباد' , 'شمس آباد');
			options[43] = new Option('شهر قدس' , 'شهر قدس');
			options[44] = new Option('شهرآباد' , 'شهرآباد');
			options[45] = new Option('شهرجديد پرديس' , 'شهرجديد پرديس');
			options[46] = new Option('شهرقدس' , 'شهرقدس');
			options[47] = new Option('شهريار' , 'شهريار');
			options[48] = new Option('شهريار بردآباد' , 'شهريار بردآباد');
			options[49] = new Option('صالح آباد' , 'صالح آباد');
			options[50] = new Option('صفادشت' , 'صفادشت');
			options[51] = new Option('فرودگاه امام خمينی' , 'فرودگاه امام خمينی');
			options[52] = new Option('فرون آباد' , 'فرون آباد');
			options[53] = new Option('فشم' , 'فشم');
			options[54] = new Option('فيروزكوه' , 'فيروزكوه');
			options[55] = new Option('قرچک' , 'قرچک');
			options[56] = new Option('قيام دشت' , 'قيام دشت');
			options[57] = new Option('كهريزک' , 'كهريزک');
			options[58] = new Option('كيلان' , 'كيلان');
			options[59] = new Option('گلدسته' , 'گلدسته');
			options[60] = new Option('گلستان' , 'گلستان');
			options[61] = new Option('گيلاوند' , 'گيلاوند');
			options[62] = new Option('لواسان' , 'لواسان');
			options[63] = new Option('لوسان بزرگ' , 'لوسان بزرگ');
			options[64] = new Option('مارليک' , 'مارليک');
			options[65] = new Option('مروزبهرام' , 'مروزبهرام');
			options[66] = new Option('ملارد' , 'ملارد');
			options[67] = new Option('نسيم شهر' , 'نسيم شهر');
			options[68] = new Option('نصيرآباد' , 'نصيرآباد');
			options[69] = new Option('واوان' , 'واوان');
			options[70] = new Option('وحيديه' , 'وحيديه');
			options[71] = new Option('ورامين' , 'ورامين');
			options[72] = new Option('وهن آباد' , 'وهن آباد');
		}
		if(state == 'گیلان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('احمد سرگوراب' , 'احمد سرگوراب');
			options[2] = new Option('اسالم' , 'اسالم');
			options[3] = new Option('اسكلک' , 'اسكلک');
			options[4] = new Option('اسلام آباد' , 'اسلام آباد');
			options[5] = new Option('اطاقور' , 'اطاقور');
			options[6] = new Option('املش' , 'املش');
			options[7] = new Option('آبكنار' , 'آبكنار');
			options[8] = new Option('آستارا' , 'آستارا');
			options[9] = new Option('آستانه اشرفيه' , 'آستانه اشرفيه');
			options[10] = new Option('بازار اسالم' , 'بازار اسالم');
			options[11] = new Option('بازارجمعه شاندرمن' , 'بازارجمعه شاندرمن');
			options[12] = new Option('برهسر' , 'برهسر');
			options[13] = new Option('بلترک' , 'بلترک');
			options[14] = new Option('بلسبنه' , 'بلسبنه');
			options[15] = new Option('بندر انزلی' , 'بندر انزلی');
			options[16] = new Option('پاشاكی' , 'پاشاكی');
			options[17] = new Option('پرهسر' , 'پرهسر');
			options[18] = new Option('پلاسی' , 'پلاسی');
			options[19] = new Option('پونل' , 'پونل');
			options[20] = new Option('پيربست لولمان' , 'پيربست لولمان');
			options[21] = new Option('توتكابن' , 'توتكابن');
			options[22] = new Option('جوكندان' , 'جوكندان');
			options[23] = new Option('جيرنده' , 'جيرنده');
			options[24] = new Option('چابكسر' , 'چابكسر');
			options[25] = new Option('چاپارخانه' , 'چاپارخانه');
			options[26] = new Option('چوبر' , 'چوبر');
			options[27] = new Option('خاچكين' , 'خاچكين');
			options[28] = new Option('خشک بيجار' , 'خشک بيجار');
			options[29] = new Option('خطبه سرا' , 'خطبه سرا');
			options[30] = new Option('خمام' , 'خمام');
			options[31] = new Option('ديلمان' , 'ديلمان');
			options[32] = new Option('رانكوه' , 'رانكوه');
			options[33] = new Option('رحيم آباد' , 'رحيم آباد');
			options[34] = new Option('رستم آباد' , 'رستم آباد');
			options[35] = new Option('رشت' , 'رشت');
			options[36] = new Option('رضوان شهر' , 'رضوان شهر');
			options[37] = new Option('رودبار' , 'رودبار');
			options[38] = new Option('رودسر' , 'رودسر');
			options[39] = new Option('سراوان' , 'سراوان');
			options[40] = new Option('سنگر' , 'سنگر');
			options[41] = new Option('سياهكل' , 'سياهكل');
			options[42] = new Option('شاندرمن' , 'شاندرمن');
			options[43] = new Option('شفت' , 'شفت');
			options[44] = new Option('صومعه سرا' , 'صومعه سرا');
			options[45] = new Option('طاهر گوداب' , 'طاهر گوداب');
			options[46] = new Option('طوللات' , 'طوللات');
			options[47] = new Option('فومن' , 'فومن');
			options[48] = new Option('قاسم آبادسفلی' , 'قاسم آبادسفلی');
			options[49] = new Option('كپورچال' , 'كپورچال');
			options[50] = new Option('كلاچای' , 'كلاچای');
			options[51] = new Option('كوچصفهان' , 'كوچصفهان');
			options[52] = new Option('كومله' , 'كومله');
			options[53] = new Option('كياشهر' , 'كياشهر');
			options[54] = new Option('گشت' , 'گشت');
			options[55] = new Option('لاهيجان' , 'لاهيجان');
			options[56] = new Option('لشت نشا' , 'لشت نشا');
			options[57] = new Option('لنگرود' , 'لنگرود');
			options[58] = new Option('لوشان' , 'لوشان');
			options[59] = new Option('لولمان' , 'لولمان');
			options[60] = new Option('لوندويل' , 'لوندويل');
			options[61] = new Option('ليسار' , 'ليسار');
			options[62] = new Option('ماسال' , 'ماسال');
			options[63] = new Option('ماسوله' , 'ماسوله');
			options[64] = new Option('منجيل' , 'منجيل');
			options[65] = new Option('هشتپر ـ طوالش' , 'هشتپر ـ طوالش');
			options[66] = new Option('واجارگاه' , 'واجارگاه');
			options[67] = new Option('چمخاله' , 'چمخاله');
		}
		if(state == 'آذربایجان شرقی')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ابشاحمد' , 'ابشاحمد');
			options[2] = new Option('اذغان' , 'اذغان');
			options[3] = new Option('اسب فروشان' , 'اسب فروشان');
			options[4] = new Option('اسكو' , 'اسكو');
			options[5] = new Option('اغچه ريش' , 'اغچه ريش');
			options[6] = new Option('اقمنار' , 'اقمنار');
			options[7] = new Option('القو' , 'القو');
			options[8] = new Option('اهر' , 'اهر');
			options[9] = new Option('ايلخچی' , 'ايلخچی');
			options[10] = new Option('آذرشهر' , 'آذرشهر');
			options[11] = new Option('باسمنج' , 'باسمنج');
			options[12] = new Option('بخشايش ـ كلوانق' , 'بخشايش ـ كلوانق');
			options[13] = new Option('بستان آباد' , 'بستان آباد');
			options[14] = new Option('بناب' , 'بناب');
			options[15] = new Option('بناب جديد ـ مرند' , 'بناب جديد ـ مرند');
			options[16] = new Option('تبريز' , 'تبريز');
			options[17] = new Option('ترک' , 'ترک');
			options[18] = new Option('تسوج' , 'تسوج');
			options[19] = new Option('جلفا' , 'جلفا');
			options[20] = new Option('خامنه' , 'خامنه');
			options[21] = new Option('خداآفرين' , 'خداآفرين');
			options[22] = new Option('خسروشهر' , 'خسروشهر');
			options[23] = new Option('خضرلو' , 'خضرلو');
			options[24] = new Option('خلجان' , 'خلجان');
			options[25] = new Option('سبلان' , 'سبلان');
			options[26] = new Option('سراب' , 'سراب');
			options[27] = new Option('سردرود' , 'سردرود');
			options[28] = new Option('سيس' , 'سيس');
			options[29] = new Option('شادباد مشايخ' , 'شادباد مشايخ');
			options[30] = new Option('شبستر' , 'شبستر');
			options[31] = new Option('شربيان' , 'شربيان');
			options[32] = new Option('شرفخانه' , 'شرفخانه');
			options[33] = new Option('شهرجديد سهند' , 'شهرجديد سهند');
			options[34] = new Option('صوفيان' , 'صوفيان');
			options[35] = new Option('عجب شير' , 'عجب شير');
			options[36] = new Option('قره اغاج ـ چاراويماق' , 'قره اغاج ـ چاراويماق');
			options[37] = new Option('قره بابا' , 'قره بابا');
			options[38] = new Option('كردكندی' , 'كردكندی');
			options[39] = new Option('كليبر' , 'كليبر');
			options[40] = new Option('كندرود' , 'كندرود');
			options[41] = new Option('كندوان' , 'كندوان');
			options[42] = new Option('گوگان' , 'گوگان');
			options[43] = new Option('مراغه' , 'مراغه');
			options[44] = new Option('مرند' , 'مرند');
			options[45] = new Option('ملكان' , 'ملكان');
			options[46] = new Option('ممقان' , 'ممقان');
			options[47] = new Option('ميانه' , 'ميانه');
			options[48] = new Option('هاديشهر' , 'هاديشهر');
			options[49] = new Option('هريس' , 'هريس');
			options[50] = new Option('هشترود' , 'هشترود');
			options[51] = new Option('هوراند' , 'هوراند');
			options[52] = new Option('ورزقان' , 'ورزقان');
		}
		if(state == 'خوزستان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اروند كنار' , 'اروند كنار');
			options[2] = new Option('اميديه' , 'اميديه');
			options[3] = new Option('انديمشک' , 'انديمشک');
			options[4] = new Option('اهواز' , 'اهواز');
			options[5] = new Option('ايذه' , 'ايذه');
			options[6] = new Option('آبادان' , 'آبادان');
			options[7] = new Option('آغاجاری' , 'آغاجاری');
			options[8] = new Option('باغ ملک' , 'باغ ملک');
			options[9] = new Option('بندرامام خمينی' , 'بندرامام خمينی');
			options[10] = new Option('بهبهان' , 'بهبهان');
			options[11] = new Option('جايزان' , 'جايزان');
			options[12] = new Option('جنت مكان' , 'جنت مكان');
			options[13] = new Option('چمران ـ شهرک طالقانی' , 'چمران ـ شهرک طالقانی');
			options[14] = new Option('حميديه' , 'حميديه');
			options[15] = new Option('خرمشهر' , 'خرمشهر');
			options[16] = new Option('دزآب' , 'دزآب');
			options[17] = new Option('دزفول' , 'دزفول');
			options[18] = new Option('دهدز' , 'دهدز');
			options[19] = new Option('رامشير' , 'رامشير');
			options[20] = new Option('رامهرمز' , 'رامهرمز');
			options[21] = new Option('سربندر' , 'سربندر');
			options[22] = new Option('سردشت' , 'سردشت');
			options[23] = new Option('سماله' , 'سماله');
			options[24] = new Option('سوسنگرد ـ دشت آزادگان' , 'سوسنگرد ـ دشت آزادگان');
			options[25] = new Option('شادگان' , 'شادگان');
			options[26] = new Option('شرافت' , 'شرافت');
			options[27] = new Option('شوش' , 'شوش');
			options[28] = new Option('شوشتر' , 'شوشتر');
			options[29] = new Option('شيبان' , 'شيبان');
			options[30] = new Option('صالح مشطت' , 'صالح مشطت');
			options[31] = new Option('كردستان بزرگ' , 'كردستان بزرگ');
			options[32] = new Option('گتوند' , 'گتوند');
			options[33] = new Option('لالی' , 'لالی');
			options[34] = new Option('ماهشهر' , 'ماهشهر');
			options[35] = new Option('مسجد سليمان' , 'مسجد سليمان');
			options[36] = new Option('ملاثانی' , 'ملاثانی');
			options[37] = new Option('ميانكوه' , 'ميانكوه');
			options[38] = new Option('هفتگل' , 'هفتگل');
			options[39] = new Option('هنديجان' , 'هنديجان');
			options[40] = new Option('هويزه' , 'هويزه');
			options[41] = new Option('ويس' , 'ويس');
		}
		if(state == 'فارس')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option(' بيضا' , 'بيضا');
			options[2] = new Option('اردكان ـ سپيدان' , 'اردكان ـ سپيدان');
			options[3] = new Option('ارسنجان' , 'ارسنجان');
			options[4] = new Option('استهبان' , 'استهبان');
			options[5] = new Option('اشكنان ـ اهل' , 'اشكنان ـ اهل');
			options[6] = new Option('اقليد' , 'اقليد');
			options[7] = new Option('اكبرآباد كوار' , 'اكبرآباد كوار');
			options[8] = new Option('اوز' , 'اوز');
			options[9] = new Option('ايزدخواست' , 'ايزدخواست');
			options[10] = new Option('آباده' , 'آباده');
			options[11] = new Option('آباده طشک' , 'آباده طشک');
			options[12] = new Option('بالاده' , 'بالاده');
			options[13] = new Option('بانش' , 'بانش');
			options[14] = new Option('بنارويه' , 'بنارويه');
			options[15] = new Option('بهمن' , 'بهمن');
			options[16] = new Option('بوانات' , 'بوانات');
			options[17] = new Option('بوانات (سوريان)' , 'بوانات (سوريان)');
			options[18] = new Option('بيرم' , 'بيرم');
			options[19] = new Option('جنت شهر (دهخير)' , 'جنت شهر (دهخير)');
			options[20] = new Option('جهرم' , 'جهرم');
			options[21] = new Option('جويم' , 'جويم');
			options[22] = new Option('حاجی آباد ـ زرين دشت' , 'حاجی آباد ـ زرين دشت');
			options[23] = new Option('حسن آباد' , 'حسن آباد');
			options[24] = new Option('خرامه' , 'خرامه');
			options[25] = new Option('خرمی' , 'خرمی');
			options[26] = new Option('خشت' , 'خشت');
			options[27] = new Option('خنج' , 'خنج');
			options[28] = new Option('خيرآباد توللی' , 'خيرآباد توللی');
			options[29] = new Option('داراب' , 'داراب');
			options[30] = new Option('داريان' , 'داريان');
			options[31] = new Option('دهرم' , 'دهرم');
			options[32] = new Option('رونيز' , 'رونيز');
			options[33] = new Option('زاهدشهر' , 'زاهدشهر');
			options[34] = new Option('زرقان' , 'زرقان');
			options[35] = new Option('سروستان' , 'سروستان');
			options[36] = new Option('سعادت شهر ـ پاسارگاد' , 'سعادت شهر ـ پاسارگاد');
			options[37] = new Option('سيدان' , 'سيدان');
			options[38] = new Option('ششده' , 'ششده');
			options[39] = new Option('شهرجديد صدرا' , 'شهرجديد صدرا');
			options[40] = new Option('شيراز' , 'شيراز');
			options[41] = new Option('صغاد' , 'صغاد');
			options[42] = new Option('صفاشهر ـ خرم بيد' , 'صفاشهر ـ خرم بيد');
			options[43] = new Option('طسوج' , 'طسوج');
			options[44] = new Option('علاءمرودشت' , 'علاءمرودشت');
			options[45] = new Option('فدامی' , 'فدامی');
			options[46] = new Option('فراشبند' , 'فراشبند');
			options[47] = new Option('فسا' , 'فسا');
			options[48] = new Option('فيروزآباد' , 'فيروزآباد');
			options[49] = new Option('فيشور' , 'فيشور');
			options[50] = new Option('قادرآباد' , 'قادرآباد');
			options[51] = new Option('قائميه' , 'قائميه');
			options[52] = new Option('قطب آباد' , 'قطب آباد');
			options[53] = new Option('قطرويه' , 'قطرويه');
			options[54] = new Option('قير و كارزين' , 'قير و كارزين');
			options[55] = new Option('كازرون' , 'كازرون');
			options[56] = new Option('كام فيروز' , 'كام فيروز');
			options[57] = new Option('كلانی' , 'كلانی');
			options[58] = new Option('كنارتخته' , 'كنارتخته');
			options[59] = new Option('كوار' , 'كوار');
			options[60] = new Option('گراش' , 'گراش');
			options[61] = new Option('گويم' , 'گويم');
			options[62] = new Option('لار ـ لارستان' , 'لار ـ لارستان');
			options[63] = new Option('لامرد' , 'لامرد');
			options[64] = new Option('مبارک آباد' , 'مبارک آباد');
			options[65] = new Option('مرودشت' , 'مرودشت');
			options[66] = new Option('مشكان' , 'مشكان');
			options[67] = new Option('مصيری ـ رستم' , 'مصيری ـ رستم');
			options[68] = new Option('مظفری' , 'مظفری');
			options[69] = new Option('مهر' , 'مهر');
			options[70] = new Option('ميمند' , 'ميمند');
			options[71] = new Option('نورآباد ـ ممسنی' , 'نورآباد ـ ممسنی');
			options[72] = new Option('نی ريز' , 'نی ريز');
			options[73] = new Option('وراوی' , 'وراوی');
		}
		if(state == 'اصفهان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ابريشم' , 'ابريشم');
			options[2] = new Option('ابوزيد آباد' , 'ابوزيد آباد');
			options[3] = new Option('اردستان' , 'اردستان');
			options[4] = new Option('اريسمان' , 'اريسمان');
			options[5] = new Option('اژيه' , 'اژيه');
			options[6] = new Option('اسفرجان' , 'اسفرجان');
			options[7] = new Option('اسلام آباد' , 'اسلام آباد');
			options[8] = new Option('اشن' , 'اشن');
			options[9] = new Option('اصغر آباد' , 'اصغر آباد');
			options[10] = new Option('اصفهان' , 'اصفهان');
			options[11] = new Option('امين آباد' , 'امين آباد');
			options[12] = new Option('ايمان شهر' , 'ايمان شهر');
			options[13] = new Option('آران و بيدگل' , 'آران و بيدگل');
			options[14] = new Option('بادرود' , 'بادرود');
			options[15] = new Option('باغ بهادران' , 'باغ بهادران');
			options[16] = new Option('بهارستان' , 'بهارستان');
			options[17] = new Option('بوئين و مياندشت' , 'بوئين و مياندشت');
			options[18] = new Option('پيربكران' , 'پيربكران');
			options[19] = new Option('تودشک' , 'تودشک');
			options[20] = new Option('تيران' , 'تيران');
			options[21] = new Option('جعفرآباد' , 'جعفرآباد');
			options[22] = new Option('جندق' , 'جندق');
			options[23] = new Option('جوجيل' , 'جوجيل');
			options[24] = new Option('چادگان' , 'چادگان');
			options[25] = new Option('چرمهين' , 'چرمهين');
			options[26] = new Option('چمگردان' , 'چمگردان');
			options[27] = new Option('حسن آباد' , 'حسن آباد');
			options[28] = new Option('خالد آباد' , 'خالد آباد');
			options[29] = new Option('خمينی شهر' , 'خمينی شهر');
			options[30] = new Option('خوانسار' , 'خوانسار');
			options[31] = new Option('خوانسارک' , 'خوانسارک');
			options[32] = new Option('خور' , 'خور');
			options[33] = new Option('خوراسگان' , 'خوراسگان');
			options[34] = new Option('خورزوق' , 'خورزوق');
			options[35] = new Option('داران ـ فريدن' , 'داران ـ فريدن');
			options[36] = new Option('درچه پياز' , 'درچه پياز');
			options[37] = new Option('دستگرد و برخوار' , 'دستگرد و برخوار');
			options[38] = new Option('دهاقان' , 'دهاقان');
			options[39] = new Option('دهق' , 'دهق');
			options[40] = new Option('دولت آباد' , 'دولت آباد');
			options[41] = new Option('ديزيچه' , 'ديزيچه');
			options[42] = new Option('رزوه' , 'رزوه');
			options[43] = new Option('رضوان شهر' , 'رضوان شهر');
			options[44] = new Option('رهنان' , 'رهنان');
			options[45] = new Option('زاينده رود' , 'زاينده رود');
			options[46] = new Option('زرين شهر ـ لنجان' , 'زرين شهر ـ لنجان');
			options[47] = new Option('زواره' , 'زواره');
			options[48] = new Option('زيار' , 'زيار');
			options[49] = new Option('زيبا شهر' , 'زيبا شهر');
			options[50] = new Option('سپاهان شهر' , 'سپاهان شهر');
			options[51] = new Option('سده لنجان' , 'سده لنجان');
			options[52] = new Option('سميرم' , 'سميرم');
			options[53] = new Option('شاهين شهر' , 'شاهين شهر');
			options[54] = new Option('شهرضا' , 'شهرضا');
			options[55] = new Option('شهرک صنعتی مورچ' , 'شهرک صنعتی مورچ');
			options[56] = new Option('شهرک مجلسی' , 'شهرک مجلسی');
			options[57] = new Option('شهرک صنعتی محمودآباد' , 'شهرک صنعتی محمودآباد');
			options[58] = new Option('طالخونچه' , 'طالخونچه');
			options[59] = new Option('عسگران' , 'عسگران');
			options[60] = new Option('علويچه' , 'علويچه');
			options[61] = new Option('غرغن' , 'غرغن');
			options[62] = new Option('فرخی' , 'فرخی');
			options[63] = new Option('فريدون شهر' , 'فريدون شهر');
			options[64] = new Option('فلاورجان' , 'فلاورجان');
			options[65] = new Option('فولادشهر' , 'فولادشهر');
			options[66] = new Option('فولاد مباركه' , 'فولاد مباركه');
			options[67] = new Option('قهدريجان' , 'قهدريجان');
			options[68] = new Option('كاشان' , 'كاشان');
			options[69] = new Option('كليشاد و سودرجان' , 'كليشاد و سودرجان');
			options[70] = new Option('كمشچه' , 'كمشچه');
			options[71] = new Option('كوهپايه' , 'كوهپايه');
			options[72] = new Option('گز' , 'گز');
			options[73] = new Option('گلپايگان' , 'گلپايگان');
			options[74] = new Option('گلدشت' , 'گلدشت');
			options[75] = new Option('گلشهر' , 'گلشهر');
			options[76] = new Option('گوگد' , 'گوگد');
			options[77] = new Option('مباركه' , 'مباركه');
			options[78] = new Option('مهاباد' , 'مهاباد');
			options[79] = new Option('مورچه خورت' , 'مورچه خورت');
			options[80] = new Option('ميمه' , 'ميمه');
			options[81] = new Option('نائين' , 'نائين');
			options[82] = new Option('نجف آباد' , 'نجف آباد');
			options[83] = new Option('نصر آباد' , 'نصر آباد');
			options[84] = new Option('نطنز' , 'نطنز');
			options[85] = new Option('نيک آباد' , 'نيک آباد');
			options[86] = new Option('بهارستان' , 'بهارستان');
			options[87] = new Option('هرند' , 'هرند');
			options[88] = new Option('ورزنه' , 'ورزنه');
			options[89] = new Option('ورنامخواست' , 'ورنامخواست');
			options[90] = new Option('ویلاشهر' , 'ویلاشهر');
		}
		if(state == 'خراسان رضوی')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ابدال آباد' , 'ابدال آباد');
			options[2] = new Option('ازادوار' , 'ازادوار');
			options[3] = new Option('باجگيران' , 'باجگيران');
			options[4] = new Option('باخرز' , 'باخرز');
			options[5] = new Option('باسفر' , 'باسفر');
			options[6] = new Option('بجستان' , 'بجستان');
			options[7] = new Option('بردسكن' , 'بردسكن');
			options[8] = new Option('برون' , 'برون');
			options[9] = new Option('بزنگان' , 'بزنگان');
			options[10] = new Option('بند قرای' , 'بند قرای');
			options[11] = new Option('بيدخت' , 'بيدخت');
			options[12] = new Option('تايباد' , 'تايباد');
			options[13] = new Option('تربت جام' , 'تربت جام');
			options[14] = new Option('تربت حيدريه' , 'تربت حيدريه');
			options[15] = new Option('جغتای' , 'جغتای');
			options[16] = new Option('جنگل' , 'جنگل');
			options[17] = new Option('چمن آباد' , 'چمن آباد');
			options[18] = new Option('چناران' , 'چناران');
			options[19] = new Option('خليل آباد' , 'خليل آباد');
			options[20] = new Option('خواف' , 'خواف');
			options[21] = new Option('داورزن' , 'داورزن');
			options[22] = new Option('درگز' , 'درگز');
			options[23] = new Option('دولت آباد ـ زاوه' , 'دولت آباد ـ زاوه');
			options[24] = new Option('رادكان' , 'رادكان');
			options[25] = new Option('رشتخوار' , 'رشتخوار');
			options[26] = new Option('رضويه' , 'رضويه');
			options[27] = new Option('ريوش (كوهسرخ)' , 'ريوش (كوهسرخ)');
			options[28] = new Option('سبزوار' , 'سبزوار');
			options[29] = new Option('سرخس' , 'سرخس');
			options[30] = new Option('سلطان آباد' , 'سلطان آباد');
			options[31] = new Option('سنگان' , 'سنگان');
			options[32] = new Option('شانديز' , 'شانديز');
			options[33] = new Option('صالح آباد' , 'صالح آباد');
			options[34] = new Option('طرقبه ـ بينالود' , 'طرقبه ـ بينالود');
			options[35] = new Option('طوس سفلی' , 'طوس سفلی');
			options[36] = new Option('فريمان' , 'فريمان');
			options[37] = new Option('فيروزه ـ تخت جلگه' , 'فيروزه ـ تخت جلگه');
			options[38] = new Option('فيض آباد ـ مه ولات' , 'فيض آباد ـ مه ولات');
			options[39] = new Option('قاسم آباد' , 'قاسم آباد');
			options[40] = new Option('قدمگاه' , 'قدمگاه');
			options[41] = new Option('قوچان' , 'قوچان');
			options[42] = new Option('كاخک' , 'كاخک');
			options[43] = new Option('كاشمر' , 'كاشمر');
			options[44] = new Option('كلات' , 'كلات');
			options[45] = new Option('گلبهار' , 'گلبهار');
			options[46] = new Option('گناباد' , 'گناباد');
			options[47] = new Option('لطف آباد' , 'لطف آباد');
			options[48] = new Option('مشهد' , 'مشهد');
			options[49] = new Option('مشهد ريزه' , 'مشهد ريزه');
			options[50] = new Option('مصعبی' , 'مصعبی');
			options[51] = new Option('نشتيفان' , 'نشتيفان');
			options[52] = new Option('نقاب ـ جوين' , 'نقاب ـ جوين');
			options[53] = new Option('نيشابور' , 'نيشابور');
			options[54] = new Option('نيل شهر' , 'نيل شهر');
		}
		if(state == 'قزوین')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('َآوج' , 'َآوج');
			options[2] = new Option('ارداق' , 'ارداق');
			options[3] = new Option('اسفرورين' , 'اسفرورين');
			options[4] = new Option('اقباليه' , 'اقباليه');
			options[5] = new Option('الوند' , 'الوند');
			options[6] = new Option('آبگرم' , 'آبگرم');
			options[7] = new Option('آبيک' , 'آبيک');
			options[8] = new Option('آقابابا' , 'آقابابا');
			options[9] = new Option('بوئين زهرا' , 'بوئين زهرا');
			options[10] = new Option('بیدستان' , 'بیدستان');
			options[11] = new Option('تاكستان' , 'تاكستان');
			options[12] = new Option('حصار' , 'حصار');
			options[13] = new Option('خاكعلی' , 'خاكعلی');
			options[14] = new Option('خرم دشت' , 'خرم دشت');
			options[15] = new Option('دانسفهان' , 'دانسفهان');
			options[16] = new Option('سيردان' , 'سيردان');
			options[17] = new Option('شال' , 'شال');
			options[18] = new Option('شهر صنعتی البرز' , 'شهر صنعتی البرز');
			options[19] = new Option('ضياآباد' , 'ضياآباد');
			options[20] = new Option('قزوين' , 'قزوين');
			options[21] = new Option('ليا' , 'ليا');
			options[22] = new Option('محمديه' , 'محمديه');
			options[23] = new Option('محمود آباد نمونه' , 'محمود آباد نمونه');
			options[24] = new Option('معلم كلايه' , 'معلم كلايه');
			options[25] = new Option('نرجه' , 'نرجه');
		}
		if(state == 'سمنان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ارادان' , 'ارادان');
			options[2] = new Option('اميريه' , 'اميريه');
			options[3] = new Option('ايوانكی' , 'ايوانكی');
			options[4] = new Option('بسطام' , 'بسطام');
			options[5] = new Option('بيارجمند' , 'بيارجمند');
			options[6] = new Option('خيرآباد' , 'خيرآباد');
			options[7] = new Option('دامغان' , 'دامغان');
			options[8] = new Option('درجزين' , 'درجزين');
			options[9] = new Option('سرخه' , 'سرخه');
			options[10] = new Option('سمنان' , 'سمنان');
			options[11] = new Option('شاهرود' , 'شاهرود');
			options[12] = new Option('شهميرزاد' , 'شهميرزاد');
			options[13] = new Option('گرمسار' , 'گرمسار');
			options[14] = new Option('مجن' , 'مجن');
			options[15] = new Option('مهدی شهر' , 'مهدی شهر');
			options[16] = new Option('ميامی' , 'ميامی');
			options[17] = new Option('ميغان' , 'ميغان');
		}
		if(state == 'قم')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('دستجرد' , 'دستجرد');
			options[2] = new Option('سلفچگان' , 'سلفچگان');
			options[3] = new Option('شهر جعفریه' , 'شهر جعفریه');
			options[4] = new Option('قم' , 'قم');
			options[5] = new Option('قنوات' , 'قنوات');
			options[6] = new Option('كهک' , 'كهک');
		}
		if(state == 'مرکزی')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اراک' , 'اراک');
			options[2] = new Option('آستانه' , 'آستانه');
			options[3] = new Option('آشتيان' , 'آشتيان');
			options[4] = new Option('تفرش' , 'تفرش');
			options[5] = new Option('توره' , 'توره');
			options[6] = new Option('جاورسيان' , 'جاورسيان');
			options[7] = new Option('خسروبيک' , 'خسروبيک');
			options[8] = new Option('خشک رود' , 'خشک رود');
			options[9] = new Option('خمين' , 'خمين');
			options[10] = new Option('خنداب' , 'خنداب');
			options[11] = new Option('دليجان' , 'دليجان');
			options[12] = new Option('ريحان عليا' , 'ريحان عليا');
			options[13] = new Option('زاويه' , 'زاويه');
			options[14] = new Option('ساوه' , 'ساوه');
			options[15] = new Option('شازند' , 'شازند');
			options[16] = new Option('شهراب' , 'شهراب');
			options[17] = new Option('شهرک مهاجران' , 'شهرک مهاجران');
			options[18] = new Option('فرمهين' , 'فرمهين');
			options[19] = new Option('كميجان' , 'كميجان');
			options[20] = new Option('مامونيه ـ زرنديه' , 'مامونيه ـ زرنديه');
			options[21] = new Option('محلات' , 'محلات');
			options[22] = new Option('ميلاجرد' , 'ميلاجرد');
			options[23] = new Option('هندودر' , 'هندودر');
		}
		if(state == 'زنجان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('آب بر ـ طارم' , 'آب بر ـ طارم');
			options[2] = new Option('ابهر' , 'ابهر');
			options[3] = new Option('اسفجين' , 'اسفجين');
			options[4] = new Option('پری' , 'پری');
			options[5] = new Option('حلب' , 'حلب');
			options[6] = new Option('خرمدره' , 'خرمدره');
			options[7] = new Option('دستجرده' , 'دستجرده');
			options[8] = new Option('دندی' , 'دندی');
			options[9] = new Option('زرين آباد ـ ايجرود' , 'زرين آباد ـ ايجرود');
			options[10] = new Option('زرين رود' , 'زرين رود');
			options[11] = new Option('زنجان' , 'زنجان');
			options[12] = new Option('سلطانيه' , 'سلطانيه');
			options[13] = new Option('صائين قلعه' , 'صائين قلعه');
			options[14] = new Option('قيدار' , 'قيدار');
			options[15] = new Option('گرماب' , 'گرماب');
			options[16] = new Option('گيلوان' , 'گيلوان');
			options[17] = new Option('ماهنشان' , 'ماهنشان');
			options[18] = new Option('همايون' , 'همايون');
			options[19] = new Option('هيدج' , 'هيدج');
		}
		if(state == 'مازندران')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اسلام آباد' , 'اسلام آباد');
			options[2] = new Option('اميركلا' , 'اميركلا');
			options[3] = new Option('ايزدشهر' , 'ايزدشهر');
			options[4] = new Option('آمل' , 'آمل');
			options[5] = new Option('آهنگركلا' , 'آهنگركلا');
			options[6] = new Option('بابل' , 'بابل');
			options[7] = new Option('بابلسر' , 'بابلسر');
			options[8] = new Option('بلده' , 'بلده');
			options[9] = new Option('بهشهر' , 'بهشهر');
			options[10] = new Option('بهنمير' , 'بهنمير');
			options[11] = new Option('پل سفيد ـ سوادكوه' , 'پل سفيد ـ سوادكوه');
			options[12] = new Option('تنكابن' , 'تنكابن');
			options[13] = new Option('جويبار' , 'جويبار');
			options[14] = new Option('چالوس' , 'چالوس');
			options[15] = new Option('چمستان' , 'چمستان');
			options[16] = new Option('خرم آباد' , 'خرم آباد');
			options[17] = new Option('خوشرودپی' , 'خوشرودپی');
			options[18] = new Option('رامسر' , 'رامسر');
			options[19] = new Option('رستم كلا' , 'رستم كلا');
			options[20] = new Option('رويانشهر' , 'رويانشهر');
			options[21] = new Option('زاغمرز' , 'زاغمرز');
			options[22] = new Option('زرگر محله' , 'زرگر محله');
			options[23] = new Option('زيرآب' , 'زيرآب');
			options[24] = new Option('سادات محله' , 'سادات محله');
			options[25] = new Option('ساری' , 'ساری');
			options[26] = new Option('سرخرود' , 'سرخرود');
			options[27] = new Option('سلمانشهر' , 'سلمانشهر');
			options[28] = new Option('سنگده' , 'سنگده');
			options[29] = new Option('سوا' , 'سوا');
			options[30] = new Option('سورک' , 'سورک');
			options[31] = new Option('شيرگاه' , 'شيرگاه');
			options[32] = new Option('شيرود' , 'شيرود');
			options[33] = new Option('عباس آباد' , 'عباس آباد');
			options[34] = new Option('فريدون كنار' , 'فريدون كنار');
			options[35] = new Option('قائم شهر' , 'قائم شهر');
			options[36] = new Option('كلارآباد' , 'كلارآباد');
			options[37] = new Option('كلاردشت' , 'كلاردشت');
			options[38] = new Option('كيا كلا' , 'كيا كلا');
			options[39] = new Option('كياسر' , 'كياسر');
			options[40] = new Option('گزنک' , 'گزنک');
			options[41] = new Option('گلوگاه' , 'گلوگاه');
			options[42] = new Option('گهرباران' , 'گهرباران');
			options[43] = new Option('محمود آباد' , 'محمود آباد');
			options[44] = new Option('مرزن آباد' , 'مرزن آباد');
			options[45] = new Option('مرزی كلا' , 'مرزی كلا');
			options[46] = new Option('نشتارود' , 'نشتارود');
			options[47] = new Option('نكاء' , 'نكاء');
			options[48] = new Option('نور' , 'نور');
			options[49] = new Option('نوشهر' , 'نوشهر');
		}
		if(state == 'گلستان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('انبار آلوم' , 'انبار آلوم');
			options[2] = new Option('اينچه برون' , 'اينچه برون');
			options[3] = new Option('آزادشهر' , 'آزادشهر');
			options[4] = new Option('آق قلا' , 'آق قلا');
			options[5] = new Option('بندر گز' , 'بندر گز');
			options[6] = new Option('بندر تركمن' , 'بندر تركمن');
			options[7] = new Option('جلين' , 'جلين');
			options[8] = new Option('خان ببين' , 'خان ببين');
			options[9] = new Option('راميان' , 'راميان');
			options[10] = new Option('سيمين شهر' , 'سيمين شهر');
			options[11] = new Option('علی آباد' , 'علی آباد');
			options[12] = new Option('فاضل آباد' , 'فاضل آباد');
			options[13] = new Option('كردكوی' , 'كردكوی');
			options[14] = new Option('كلاله' , 'كلاله');
			options[15] = new Option('گاليكش' , 'گاليكش');
			options[16] = new Option('گرگان' , 'گرگان');
			options[17] = new Option('گميش تپه' , 'گميش تپه');
			options[18] = new Option('گنبد كاوس' , 'گنبد كاوس');
			options[19] = new Option('مراوه تپه' , 'مراوه تپه');
			options[20] = new Option('مينودشت' , 'مينودشت');
		}
		if(state == 'اردبیل')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ابی بيگلو' , 'ابی بيگلو');
			options[2] = new Option('اردبيل' , 'اردبيل');
			options[3] = new Option('اصلاندوز' , 'اصلاندوز');
			options[4] = new Option('بيله سوار' , 'بيله سوار');
			options[5] = new Option('پارس آباد' , 'پارس آباد');
			options[6] = new Option('تازه كند انگوت' , 'تازه كند انگوت');
			options[7] = new Option('جعفرآباد' , 'جعفرآباد');
			options[8] = new Option('خلخال' , 'خلخال');
			options[9] = new Option('سرعين' , 'سرعين');
			options[10] = new Option('شهرک شهيد غفاری' , 'شهرک شهيد غفاری');
			options[11] = new Option('كلور' , 'كلور');
			options[12] = new Option('كوارئيم' , 'كوارئيم');
			options[13] = new Option('گرمی' , 'گرمی');
			options[14] = new Option('گيوی ـ كوثر' , 'گيوی ـ كوثر');
			options[15] = new Option('لاهرود' , 'لاهرود');
			options[16] = new Option('مشگين شهر' , 'مشگين شهر');
			options[17] = new Option('نمين' , 'نمين');
			options[18] = new Option('نير' , 'نير');
			options[19] = new Option('هشتجين' , 'هشتجين');
		}
		if(state == 'آذربایجان غربی')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اروميه' , 'اروميه');
			options[2] = new Option('اشنويه' , 'اشنويه');
			options[3] = new Option('ايواوغلی' , 'ايواوغلی');
			options[4] = new Option('بازرگان' , 'بازرگان');
			options[5] = new Option('بوكان' , 'بوكان');
			options[6] = new Option('پسوه' , 'پسوه');
			options[7] = new Option('پلدشت' , 'پلدشت');
			options[8] = new Option('پيرانشهر' , 'پيرانشهر');
			options[9] = new Option('تازه شهر' , 'تازه شهر');
			options[10] = new Option('تكاب' , 'تكاب');
			options[11] = new Option('چهاربرج قديم' , 'چهاربرج قديم');
			options[12] = new Option('خوی' , 'خوی');
			options[13] = new Option('ديزج' , 'ديزج');
			options[14] = new Option('ديزجديز' , 'ديزجديز');
			options[15] = new Option('ربط' , 'ربط');
			options[16] = new Option('زيوه' , 'زيوه');
			options[17] = new Option('سردشت' , 'سردشت');
			options[18] = new Option('سلماس' , 'سلماس');
			options[19] = new Option('سيلوانا' , 'سيلوانا');
			options[20] = new Option('سيلوه' , 'سيلوه');
			options[21] = new Option('سيه چشمه ـ چالدران' , 'سيه چشمه ـ چالدران');
			options[22] = new Option('شاهين دژ' , 'شاهين دژ');
			options[23] = new Option('شوط' , 'شوط');
			options[24] = new Option('قره ضياء الدين ـ چايپاره' , 'قره ضياء الدين ـ چايپاره');
			options[25] = new Option('قوشچی' , 'قوشچی');
			options[26] = new Option('كشاورز (اقبال)' , 'كشاورز (اقبال)');
			options[27] = new Option('ماكو' , 'ماكو');
			options[28] = new Option('محمد يار' , 'محمد يار');
			options[29] = new Option('محمودآباد' , 'محمودآباد');
			options[30] = new Option('مهاباد' , 'مهاباد');
			options[31] = new Option('مياندوآب' , 'مياندوآب');
			options[32] = new Option('مياوق' , 'مياوق');
			options[33] = new Option('ميرآباد' , 'ميرآباد');
			options[34] = new Option('نقده' , 'نقده');
			options[35] = new Option('نوشين شهر' , 'نوشين شهر');
		}
		if(state == 'همدان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ازندريان' , 'ازندريان');
			options[2] = new Option('اسدآباد' , 'اسدآباد');
			options[3] = new Option('اسلام آباد' , 'اسلام آباد');
			options[4] = new Option('بهار' , 'بهار');
			options[5] = new Option('پايگاه نوژه' , 'پايگاه نوژه');
			options[6] = new Option('تويسركان' , 'تويسركان');
			options[7] = new Option('دمق' , 'دمق');
			options[8] = new Option('رزن' , 'رزن');
			options[9] = new Option('سامن' , 'سامن');
			options[10] = new Option('سركان' , 'سركان');
			options[11] = new Option('شيرين سو' , 'شيرين سو');
			options[12] = new Option('صالح آباد' , 'صالح آباد');
			options[13] = new Option('فامنين' , 'فامنين');
			options[14] = new Option('قروه درجزين' , 'قروه درجزين');
			options[15] = new Option('قهاوند' , 'قهاوند');
			options[16] = new Option('كبودرآهنگ' , 'كبودرآهنگ');
			options[17] = new Option('گيان' , 'گيان');
			options[18] = new Option('لالجين' , 'لالجين');
			options[19] = new Option('ملاير' , 'ملاير');
			options[20] = new Option('نهاوند' , 'نهاوند');
			options[21] = new Option('همدان' , 'همدان');
		}
		if(state == 'کردستان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اورامانتخت' , 'اورامانتخت');
			options[2] = new Option('بانه' , 'بانه');
			options[3] = new Option('بلبان آباد' , 'بلبان آباد');
			options[4] = new Option('بيجار' , 'بيجار');
			options[5] = new Option('دلبران' , 'دلبران');
			options[6] = new Option('دهگلان' , 'دهگلان');
			options[7] = new Option('ديواندره' , 'ديواندره');
			options[8] = new Option('سروآباد' , 'سروآباد');
			options[9] = new Option('سريش آباد' , 'سريش آباد');
			options[10] = new Option('سقز' , 'سقز');
			options[11] = new Option('سنندج' , 'سنندج');
			options[12] = new Option('قروه' , 'قروه');
			options[13] = new Option('كامياران' , 'كامياران');
			options[14] = new Option('مريوان' , 'مريوان');
			options[15] = new Option('موچش' , 'موچش');
		}
		if(state == 'کرمانشاه')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اسلام آباد غرب' , 'اسلام آباد غرب');
			options[2] = new Option('باينگان' , 'باينگان');
			options[3] = new Option('بيستون' , 'بيستون');
			options[4] = new Option('پاوه' , 'پاوه');
			options[5] = new Option('تازه آباد ـ ثلاث باباجانی' , 'تازه آباد ـ ثلاث باباجانی');
			options[6] = new Option('جوانرود' , 'جوانرود');
			options[7] = new Option('روانسر' , 'روانسر');
			options[8] = new Option('ريجاب' , 'ريجاب');
			options[9] = new Option('سراب ذهاب' , 'سراب ذهاب');
			options[10] = new Option('سرپل ذهاب' , 'سرپل ذهاب');
			options[11] = new Option('سنقر' , 'سنقر');
			options[12] = new Option('صحنه' , 'صحنه');
			options[13] = new Option('فرامان' , 'فرامان');
			options[14] = new Option('فش' , 'فش');
			options[15] = new Option('قصرشيرين' , 'قصرشيرين');
			options[16] = new Option('كرمانشاه' , 'كرمانشاه');
			options[17] = new Option('كنگاور' , 'كنگاور');
			options[18] = new Option('گيلانغرب' , 'گيلانغرب');
			options[19] = new Option('نودشه' , 'نودشه');
			options[20] = new Option('هرسين' , 'هرسين');
			options[21] = new Option('هلشی' , 'هلشی');
		}
		if(state == 'لرستان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ازنا' , 'ازنا');
			options[2] = new Option('الشتر ـ سلسله' , 'الشتر ـ سلسله');
			options[3] = new Option('اليگودرز' , 'اليگودرز');
			options[4] = new Option('برخوردار' , 'برخوردار');
			options[5] = new Option('بروجرد' , 'بروجرد');
			options[6] = new Option('پل دختر' , 'پل دختر');
			options[7] = new Option('تقی آباد' , 'تقی آباد');
			options[8] = new Option('چغلوندی' , 'چغلوندی');
			options[9] = new Option('چقابل' , 'چقابل');
			options[10] = new Option('خرم آباد' , 'خرم آباد');
			options[11] = new Option('دورود' , 'دورود');
			options[12] = new Option('زاغه' , 'زاغه');
			options[13] = new Option('سپيددشت' , 'سپيددشت');
			options[14] = new Option('شول آباد' , 'شول آباد');
			options[15] = new Option('كونانی' , 'كونانی');
			options[16] = new Option('كوهدشت' , 'كوهدشت');
			options[17] = new Option('معمولان' , 'معمولان');
			options[18] = new Option('نورآباد ـ دلفان' , 'نورآباد ـ دلفان');
			options[19] = new Option('واشيان نصيرتپه' , 'واشيان نصيرتپه');
		}
		if(state == 'بوشهر')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ابدان' , 'ابدان');
			options[2] = new Option('اهرم ـ تنگستان' , 'اهرم ـ تنگستان');
			options[3] = new Option('آباد' , 'آباد');
			options[4] = new Option('آبپخش' , 'آبپخش');
			options[5] = new Option('بادوله' , 'بادوله');
			options[6] = new Option('برازجان ـ دشتستان' , 'برازجان ـ دشتستان');
			options[7] = new Option('بردخون' , 'بردخون');
			options[8] = new Option('بندردير' , 'بندردير');
			options[9] = new Option('بندرديلم' , 'بندرديلم');
			options[10] = new Option('بندرريگ' , 'بندرريگ');
			options[11] = new Option('بندركنگان' , 'بندركنگان');
			options[12] = new Option('بندرگناوه' , 'بندرگناوه');
			options[13] = new Option('بوشهر' , 'بوشهر');
			options[14] = new Option('تنگ ارم' , 'تنگ ارم');
			options[15] = new Option('جزيره خاک' , 'جزيره خاک');
			options[16] = new Option('جم' , 'جم');
			options[17] = new Option('چغارک' , 'چغارک');
			options[18] = new Option('خورموج ـ دشتی' , 'خورموج ـ دشتی');
			options[19] = new Option('دلوار' , 'دلوار');
			options[20] = new Option('ريز' , 'ريز');
			options[21] = new Option('سعدآباد' , 'سعدآباد');
			options[22] = new Option('شبانكاره' , 'شبانكاره');
			options[23] = new Option('شنبه' , 'شنبه');
			options[24] = new Option('شول' , 'شول');
			options[25] = new Option('عالی شهر' , 'عالی شهر');
			options[26] = new Option('عسلويه' , 'عسلويه');
			options[27] = new Option('كاكی' , 'كاكی');
			options[28] = new Option('كلمه' , 'كلمه');
			options[29] = new Option('نخل تقی' , 'نخل تقی');
			options[30] = new Option('وحدتيه' , 'وحدتيه');
		}
		if(state == 'کرمان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اختيارآباد' , 'اختيارآباد');
			options[2] = new Option('ارزوئیه' , 'ارزوئیه');
			options[3] = new Option('امين شهر' , 'امين شهر');
			options[4] = new Option('انار' , 'انار');
			options[5] = new Option('باغين' , 'باغين');
			options[6] = new Option('بافت' , 'بافت');
			options[7] = new Option('بردسير' , 'بردسير');
			options[8] = new Option('بلوک' , 'بلوک');
			options[9] = new Option('بم' , 'بم');
			options[10] = new Option('بهرمان' , 'بهرمان');
			options[11] = new Option('پاريز' , 'پاريز');
			options[12] = new Option('جواديه فلاح' , 'جواديه فلاح');
			options[13] = new Option('جوشان' , 'جوشان');
			options[14] = new Option('جيرفت' , 'جيرفت');
			options[15] = new Option('چترود' , 'چترود');
			options[16] = new Option('خانوک' , 'خانوک');
			options[17] = new Option('دوساری' , 'دوساری');
			options[18] = new Option('رابر' , 'رابر');
			options[19] = new Option('راور' , 'راور');
			options[20] = new Option('راين' , 'راين');
			options[21] = new Option('رفسنجان' , 'رفسنجان');
			options[22] = new Option('رودبار' , 'رودبار');
			options[23] = new Option('ريگان' , 'ريگان');
			options[24] = new Option('زرند' , 'زرند');
			options[25] = new Option('زنگی آباد' , 'زنگی آباد');
			options[26] = new Option('سرچشمه' , 'سرچشمه');
			options[27] = new Option('سريز' , 'سريز');
			options[28] = new Option('سيرجان' , 'سيرجان');
			options[29] = new Option('شهربابک' , 'شهربابک');
			options[30] = new Option('صفائيه' , 'صفائيه');
			options[31] = new Option('عنبرآباد' , 'عنبرآباد');
			options[32] = new Option('فارياب' , 'فارياب');
			options[33] = new Option('فهرج' , 'فهرج');
			options[34] = new Option('قلعه گنج' , 'قلعه گنج');
			options[35] = new Option('كاظم آباد' , 'كاظم آباد');
			options[36] = new Option('كرمان' , 'كرمان');
			options[37] = new Option('كهنوج' , 'كهنوج');
			options[38] = new Option('كهنوج (مغزآباد)' , 'كهنوج (مغزآباد)');
			options[39] = new Option('كوهبنان' , 'كوهبنان');
			options[40] = new Option('كيان شهر' , 'كيان شهر');
			options[41] = new Option('گلباف' , 'گلباف');
			options[42] = new Option('ماهان' , 'ماهان');
			options[43] = new Option('محمدآباد ـ ريگان' , 'محمدآباد ـ ريگان');
			options[44] = new Option('محی آباد' , 'محی آباد');
			options[45] = new Option('منوجان' , 'منوجان');
			options[46] = new Option('نجف شهر' , 'نجف شهر');
			options[47] = new Option('نگار' , 'نگار');
		}
		if(state == 'هرمزگان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ابوموسی' , 'ابوموسی');
			options[2] = new Option('ايسين' , 'ايسين');
			options[3] = new Option('بستک' , 'بستک');
			options[4] = new Option('بندر خمير' , 'بندر خمير');
			options[5] = new Option('بندر عباس' , 'بندر عباس');
			options[6] = new Option('بندر لنگه' , 'بندر لنگه');
			options[7] = new Option('بندزک كهنه' , 'بندزک كهنه');
			options[8] = new Option('پارسيان' , 'پارسيان');
			options[9] = new Option('پدل' , 'پدل');
			options[10] = new Option('پل شرقی' , 'پل شرقی');
			options[11] = new Option('تياب' , 'تياب');
			options[12] = new Option('جاسک' , 'جاسک');
			options[13] = new Option('جزيره سيری' , 'جزيره سيری');
			options[14] = new Option('جزيره لاوان' , 'جزيره لاوان');
			options[15] = new Option('جزيره هنگام' , 'جزيره هنگام');
			options[16] = new Option('جزيرهلارک' , 'جزيرهلارک');
			options[17] = new Option('جناح' , 'جناح');
			options[18] = new Option('چارک' , 'چارک');
			options[19] = new Option('حاجی آباد' , 'حاجی آباد');
			options[20] = new Option('درگهان' , 'درگهان');
			options[21] = new Option('دشتی' , 'دشتی');
			options[22] = new Option('دهبارز ـ رودان' , 'دهبارز ـ رودان');
			options[23] = new Option('رويدر' , 'رويدر');
			options[24] = new Option('زيارت علی' , 'زيارت علی');
			options[25] = new Option('سردشت ـ بشاگرد' , 'سردشت ـ بشاگرد');
			options[26] = new Option('سندرک' , 'سندرک');
			options[27] = new Option('سيريک' , 'سيريک');
			options[28] = new Option('فارغان' , 'فارغان');
			options[29] = new Option('فين' , 'فين');
			options[30] = new Option('قشم' , 'قشم');
			options[31] = new Option('كنگ' , 'كنگ');
			options[32] = new Option('كيش' , 'كيش');
			options[33] = new Option('ميناب' , 'ميناب');
		}
		if(state == 'چهارمحال و بختیاری')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اردل' , 'اردل');
			options[2] = new Option('آلونی' , 'آلونی');
			options[3] = new Option('باباحيدر' , 'باباحيدر');
			options[4] = new Option('بروجن' , 'بروجن');
			options[5] = new Option('بلداجی' , 'بلداجی');
			options[6] = new Option('بن' , 'بن');
			options[7] = new Option('جونقان' , 'جونقان');
			options[8] = new Option('چالشتر' , 'چالشتر');
			options[9] = new Option('چلگرد ـ كوهرنگ' , 'چلگرد ـ كوهرنگ');
			options[10] = new Option('دزک' , 'دزک');
			options[11] = new Option('دستنای' , 'دستنای');
			options[12] = new Option('دشتک' , 'دشتک');
			options[13] = new Option('سامان' , 'سامان');
			options[14] = new Option('سودجان' , 'سودجان');
			options[15] = new Option('سورشجان' , 'سورشجان');
			options[16] = new Option('شلمزار ـ كيار' , 'شلمزار ـ كيار');
			options[17] = new Option('شهركرد' , 'شهركرد');
			options[18] = new Option('فارسان' , 'فارسان');
			options[19] = new Option('فرادنبه' , 'فرادنبه');
			options[20] = new Option('فرخ شهر' , 'فرخ شهر');
			options[21] = new Option('كیان' , 'كیان');
			options[22] = new Option('گندمان' , 'گندمان');
			options[23] = new Option('گهرو' , 'گهرو');
			options[24] = new Option('لردگان' , 'لردگان');
			options[25] = new Option('مال خليفه' , 'مال خليفه');
			options[26] = new Option('ناغان' , 'ناغان');
			options[27] = new Option('هارونی' , 'هارونی');
			options[28] = new Option('هفشجان' , 'هفشجان');
			options[29] = new Option('وردنجان' , 'وردنجان');
		}
		if(state == 'یزد')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ابركوه' , 'ابركوه');
			options[2] = new Option('احمدآباد' , 'احمدآباد');
			options[3] = new Option('اردكان' , 'اردكان');
			options[4] = new Option('بافق' , 'بافق');
			options[5] = new Option('بفروئيه' , 'بفروئيه');
			options[6] = new Option('بهاباد' , 'بهاباد');
			options[7] = new Option('تفت' , 'تفت');
			options[8] = new Option('حميديا' , 'حميديا');
			options[9] = new Option('زارچ' , 'زارچ');
			options[10] = new Option('شاهديه' , 'شاهديه');
			options[11] = new Option('صدوق' , 'صدوق');
			options[12] = new Option('طبس' , 'طبس');
			options[13] = new Option('عشق آباد' , 'عشق آباد');
			options[14] = new Option('فراغه' , 'فراغه');
			options[15] = new Option('مروست' , 'مروست');
			options[16] = new Option('مهريز' , 'مهريز');
			options[17] = new Option('ميبد' , 'ميبد');
			options[18] = new Option('نير' , 'نير');
			options[19] = new Option('هرات ـ خاتم' , 'هرات ـ خاتم');
			options[20] = new Option('يزد' , 'يزد');
		}
		if(state == 'سیستان و بلوچستان')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اسپكه' , 'اسپكه');
			options[2] = new Option('ايرانشهر' , 'ايرانشهر');
			options[3] = new Option('بزمان' , 'بزمان');
			options[4] = new Option('بمپور' , 'بمپور');
			options[5] = new Option('بنت' , 'بنت');
			options[6] = new Option('بنجار' , 'بنجار');
			options[7] = new Option('پسكو' , 'پسكو');
			options[8] = new Option('تيمور آباد' , 'تيمور آباد');
			options[9] = new Option('جالق' , 'جالق');
			options[10] = new Option('چابهار' , 'چابهار');
			options[11] = new Option('خاش' , 'خاش');
			options[12] = new Option('دوست محمد ـ هيرمند' , 'دوست محمد ـ هيرمند');
			options[13] = new Option('راسک' , 'راسک');
			options[14] = new Option('زابل' , 'زابل');
			options[15] = new Option('زابلی' , 'زابلی');
			options[16] = new Option('زاهدان' , 'زاهدان');
			options[17] = new Option('زهک' , 'زهک');
			options[18] = new Option('ساربوک' , 'ساربوک');
			options[19] = new Option('سراوان' , 'سراوان');
			options[20] = new Option('سرباز' , 'سرباز');
			options[21] = new Option('سنگان' , 'سنگان');
			options[22] = new Option('سوران ـ سيب سوران' , 'سوران ـ سيب سوران');
			options[23] = new Option('سيركان' , 'سيركان');
			options[24] = new Option('فنوج' , 'فنوج');
			options[25] = new Option('قصرقند' , 'قصرقند');
			options[26] = new Option('كنارک' , 'كنارک');
			options[27] = new Option('كيتج' , 'كيتج');
			options[28] = new Option('گلمورتی ـ دلگان' , 'گلمورتی ـ دلگان');
			options[29] = new Option('گوهركوه' , 'گوهركوه');
			options[30] = new Option('محمدآباد' , 'محمدآباد');
			options[31] = new Option('ميرجاوه' , 'ميرجاوه');
			options[32] = new Option('نصرت آباد' , 'نصرت آباد');
			options[33] = new Option('نگور' , 'نگور');
			options[34] = new Option('نيک شهر' , 'نيک شهر');
			options[35] = new Option('هيدوچ' , 'هيدوچ');
		}
		if(state == 'ایلام')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اركواز' , 'اركواز');
			options[2] = new Option('ارمو' , 'ارمو');
			options[3] = new Option('ايلام' , 'ايلام');
			options[4] = new Option('ايوان' , 'ايوان');
			options[5] = new Option('آبدانان' , 'آبدانان');
			options[6] = new Option('آسمان آباد' , 'آسمان آباد');
			options[7] = new Option('بدره' , 'بدره');
			options[8] = new Option('توحيد' , 'توحيد');
			options[9] = new Option('چشمه شيرين' , 'چشمه شيرين');
			options[10] = new Option('چوار' , 'چوار');
			options[11] = new Option('دره شهر' , 'دره شهر');
			options[12] = new Option('دهلران' , 'دهلران');
			options[13] = new Option('سرابله ـ شيروان و چرداول' , 'سرابله ـ شيروان و چرداو');
			options[14] = new Option('شباب ' , 'شباب');
			options[15] = new Option('شهرک اسلاميه' , 'شهرک اسلاميه');
			options[16] = new Option('لومار' , 'لومار');
			options[17] = new Option('مهران' , 'مهران');
			options[18] = new Option('موسيان' , 'موسيان');
			options[19] = new Option('ميمه' , 'ميمه');
		}
		if(state == 'کهگلویه و بویراحمد')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('باشت' , 'باشت');
			options[2] = new Option('پاتاوه' , 'پاتاوه');
			options[3] = new Option('چرام' , 'چرام');
			options[4] = new Option('دهدشت ـ كهگيلويه' , 'دهدشت ـ كهگيلويه');
			options[5] = new Option('دوگنبدان ـ گچساران' , 'دوگنبدان ـ گچساران');
			options[6] = new Option('ديشموک' , 'ديشموک');
			options[7] = new Option('سپيدار' , 'سپيدار');
			options[8] = new Option('سوق' , 'سوق');
			options[9] = new Option('سي سخت ـ دنا' , 'سي سخت ـ دنا');
			options[10] = new Option('قلعه رئيسی' , 'قلعه رئيسی');
			options[11] = new Option('لنده' , 'لنده');
			options[12] = new Option('ليكک' , 'ليكک');
			options[13] = new Option('مادوان' , 'مادوان');
			options[14] = new Option('ياسوج' , 'ياسوج');
		}
		if(state == 'خراسان شمالی')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اسفراين' , 'اسفراين');
			options[2] = new Option('ايور' , 'ايور');
			options[3] = new Option('آشخانه ـ مانه و سلمقان' , 'آشخانه ـ مانه و سلمقان');
			options[4] = new Option('بجنورد' , 'بجنورد');
			options[5] = new Option('جاجرم' , 'جاجرم');
			options[6] = new Option('درق' , 'درق');
			options[7] = new Option('راز' , 'راز');
			options[8] = new Option('شوقان' , 'شوقان');
			options[9] = new Option('شيروان' , 'شيروان');
			options[10] = new Option('فاروج' , 'فاروج');
			options[11] = new Option('گرمه' , 'گرمه');
		}
		if(state == 'خراسان جنوبی')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('ارسک' , 'ارسک');
			options[2] = new Option('اسديه ـ درميان' , 'اسديه ـ درميان');
			options[3] = new Option('آرين شهر' , 'آرين شهر');
			options[4] = new Option('آيسک' , 'آيسک');
			options[5] = new Option('بشرويه' , 'بشرويه');
			options[6] = new Option('بیرجند' , 'بیرجند');
			options[7] = new Option('حاجی آباد' , 'حاجی آباد');
			options[8] = new Option('خضری دشت بياض' , 'خضری دشت بياض');
			options[9] = new Option('خوسف' , 'خوسف');
			options[10] = new Option('زهان' , 'زهان');
			options[11] = new Option('سر بیشه' , 'سر بیشه');
			options[12] = new Option('سرايان' , 'سرايان');
			options[13] = new Option('سه قلعه' , 'سه قلعه');
			options[14] = new Option('فردوس' , 'فردوس');
			options[15] = new Option('قائن ـ قائنات' , 'قائن ـ قائنات');
			options[16] = new Option('گزيک' , 'گزيک');
			options[17] = new Option('مود' , 'مود');
			options[18] = new Option('نهبندان' , 'نهبندان');
			options[19] = new Option('نیمبلوک' , 'نیمبلوک');
		}
		if(state == 'البرز')
		{
			options[0] = new Option('لطفا شهر را انتخاب نمایید' , '0');
			options[1] = new Option('اشتهارد' , 'اشتهارد');
			options[2] = new Option('آسارا' , 'آسارا');
			options[3] = new Option('چهارباغ' , 'چهارباغ');
			options[4] = new Option('سيف آباد' , 'سيف آباد');
			options[5] = new Option('شهرجديد هشتگرد' , 'شهرجديد هشتگرد');
			options[6] = new Option('بالا طالقان' , 'بالا طالقان');
			options[7] = new Option('شهرک طالقان' , 'شهرک طالقان');
			options[8] = new Option('پایین طالقان' , 'پایین طالقان');
			options[9] = new Option('كرج' , 'كرج');
			options[10] = new Option('كمال شهر' , 'كمال شهر');
			options[11] = new Option('كوهسار ـ چندار' , 'كوهسار ـ چندار');
			options[12] = new Option('گرمدره' , 'گرمدره');
			options[13] = new Option('ماهدشت' , 'ماهدشت');
			options[14] = new Option('محمدشهر' , 'محمدشهر');
			options[15] = new Option('مشکين دشت' , 'مشکين دشت');
			options[16] = new Option('نظرآباد' , 'نظرآباد');
			options[17] = new Option('هشتگرد ـ ساوجبلاغ' , 'هشتگرد ـ ساوجبلاغ');
		}
	}
}