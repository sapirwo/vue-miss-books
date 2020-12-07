import Swal from 'sweetalert2'

export {
  alertRemove,
  alertCompleted,
  alertError
}

async function alertRemove(item) {
  const res = await Swal.fire({
    title: 'Are you sure?',
    text: `You won't be able to revert this ${item}!`,
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Delete',
    reverseButtons: true,
    customClass
  })
  if (res.isConfirmed) {
    alertCompleted(item, 'deleted')
    return Promise.resolve()
  } else return Promise.reject('data saved!')
}

function alertError(text) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text,
  })
}

function alertCompleted(item, task) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: `${item} ${task} successfully`
  })
}

const customClass = {
  container: '',
  popup: 'alert-popup',
  header: '',
  title: 'alert-title',
  closeButton: '',
  icon: 'alert-icon',
  image: '',
  content: '',
  input: '',
  validationMessage: '',
  actions: '',
  confirmButton: 'alert-confirm-button',
  denyButton: '',
  cancelButton: '',
  loader: '',
  footer: ''
}
