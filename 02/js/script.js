$(function () {
  // 대상을 변수에 저장
  const $faqQ = $('.faq-wrap > ul > li');
  const $faqA = $('.answer');
  const duration = 300;

  // 질문을 클릭했을 때
  $faqQ.on('click', function () {
    const selectQ = $(this).toggleClass('on');
    const selectA = $(this).find($faqA).stop().slideToggle(duration);

    $faqQ.not(selectQ).removeClass('on');
    $faqA.not(selectA).stop().slideUp(duration);
  });
});
