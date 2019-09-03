import { generate } from 'short-uuid';

export const createCardWithInpt = (defaultVal: string = '') => {
  const deleteId = generate();
  const addId = generate();
  const inputId = generate();
  const $card = $(`
    <div class="card grab text-center rounded shadow-lg drag-card">
    <div class="card-body">
        <h5 class="card-title">إضاقة اسم</h5>
        <div class="input-group flex-nowrap mb-2">
        <input value="${defaultVal}" id="${inputId}" type="text" class="form-control" placeholder="الاسمـ" aria-label="Username" aria-describedby="addon-wrapping">
    </div>
        <button type="button" class="card-link btn btn-danger" id="${deleteId}">إغــلاق</button>
        <button type="button" class="card-link btn btn-info" id="${addId}">تثبيــت</button>
    </div>
  </div>
    `).draggable();
  $('#textBase').append($card);

  $(`#${deleteId}`).on('click', () => $card.fadeOut().remove());
  $(`#${inputId}`).on('click', function() {
    this.focus();
  });
  addTxtFromInputLogic(addId, $card, inputId);
};

const addTxtFromInputLogic = (
  addId: string,
  $card: JQuery<HTMLElement>,
  inputId: string
) => {
  $(`#${addId}`).on('click', () => {
    $card.fadeOut();
    const deleteTxtId = generate();
    const editTxtId = generate();
    const textId = generate();
    const width = window.innerWidth > 641 ? 'drag-card' : 'w-100';
    const $text = $(`<div class="card grab bg-transparent border-0 text-center ${width}">
        <div class="card-header border-0">
        <button type="button" class="card-link btn btn-danger" style="display: none" id="${deleteTxtId}">مسح</button>
        <button type="button" class="card-link btn btn-warning" style="display: none" id="${editTxtId}">تعـديل</button>
        </div>
        <div class="card-body text-white ">
          <h2 class="card-title" id="${textId}">
          ${$(`#${inputId}`)
            .val()
            .toString()}
          </h2>
        </div>
      </div>`).draggable();
    $('#textBase').append($text);

    $text.on('click', () => {
      $text.find('.btn').show();
      $text.removeClass('border-0').addClass('border border-light shadow-lg');
      setTimeout(() => {
        $text.find('.btn').hide();
        $text.addClass('border-0').removeClass('border border-light shadow-lg');
      }, 3000);
    });
    $(`#${deleteTxtId}`).on('click', () => $text.fadeOut().remove());
    $(`#${editTxtId}`).on('click', () => {
      createCardWithInpt(
        $(`#${textId}`)
          .text()
          .trim()
      );
      $(`#${deleteTxtId}`).click();
    });
  });
};
