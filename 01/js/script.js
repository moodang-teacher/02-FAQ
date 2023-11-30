$(function () {
  // 대상을 변수에 저장
  const $faqQ = $('.faq-wrap > ul > li');
  const $faqA = $('.answer');
  const duration = 300;

  // 질문을 클릭했을 때
  $faqQ.on('click', function () {
    // 답변을 보여주자(slide down)
    $(this).find($faqA).stop().slideDown(duration);
  });
});
