import { generate } from 'short-uuid';

export const createCardWithInpt = () => {
  const deleteId = generate();
  const addId = generate();
  const inputId = generate();
  const $card = $(`
    <div class="card grab text-center rounded shadow-lg" style="width: 18rem">
    <div class="card-body">
        <h5 class="card-title">إضاقة اسم</h5>
        <div class="input-group flex-nowrap mb-2">
        <input  id="${inputId}" type="text" class="form-control" placeholder="الاسمـ" aria-label="Username" aria-describedby="addon-wrapping">
    </div>
        <button type="button" class="card-link btn btn-danger" id="${deleteId}">إغــلاق</button>
        <button type="button" class="card-link btn btn-info" id="${addId}">تثبيــت</button>
    </div>
  </div>
    `).draggable();
  $('body').append($card);

  $(`#${deleteId}`).on('click', () => $card.fadeOut().remove());
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
    const $text = $(`<div class="card grab bg-transparent border-0" style="max-width: 18rem;">
        <div class="card-header border-0">
        <button type="button" class="card-link btn btn-danger" style="display: none" id="${deleteTxtId}">مسح</button>
        </div>
        <div class="card-body text-white ">
          <h5 class="card-title text-right">
          ${$(`#${inputId}`)
            .val()
            .toString()}
          </h5>
        </div>
      </div>`).draggable();
    $('body').append($text);

    $text
      .mouseenter(() => {
        $text.find('.btn').show();
        $text.removeClass('border-0').addClass('border border-light shadow-lg');
      })
      .mouseleave(() => {
        $text.find('.btn').hide();
        $text.addClass('border-0').removeClass('border border-light shadow-lg');
      });

    $(`#${deleteTxtId}`).on('click', () => $text.fadeOut().remove());
  });
};
