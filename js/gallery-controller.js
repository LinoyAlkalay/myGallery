'use strict'

$(onInit)
$('.submit-btn').click(onSubmitForm)

function onInit() {
    renderPortfolioItem()
}

function renderPortfolioItem() {

    const projs = getProjs()
    const innerHTML = projs.map(proj =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${proj.id}')" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.id}.jpeg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`
    )

    $('.protfolio-container').html(innerHTML)
}

function renderModal(projId) {
    const proj = getProjById(projId)
    $('#portfolioModal').modal("toggle")
    $('.modal-body h2').text(`${proj.name}`)
    $('.item-intro').text(`${proj.title}`)
    $('.description').text(`${proj.desc}`)
    $('.modal-body .img-container').html(`<img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpeg">`)
    $('.list-inline .date').text(`Date: ${getFormattedTime(proj.publishedAt)}`)
    $('.list-inline .category').text(`Category: ${proj.labels}`)
}

function onSubmitForm() {
    const $elEmail = $('#email-contact').val()
    const $elSubject = $('#subject-contact').val()
    const $elComment = $('#msg-contact').val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=linoyalkalay@gmail.com.com&su=${$elSubject}&body=${$elComment}${$elEmail}`)
}