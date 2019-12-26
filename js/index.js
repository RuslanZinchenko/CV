const modalSection = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg');
const container = document.querySelector('.container');
const contactsText = document.querySelector('.contactsText');
const contactsInfo1 = document.querySelector('.contactsInfo1');
const contactsInfo2 = document.querySelector('.contactsInfo2');
const firstMainExperience = document.querySelector('.firstMainExperience');
const secondMainExperience = document.querySelector('.secondMainExperience');
const thirdMainExperience = document.querySelector('.thirdMainExperience');
const fourthMainExperience = document.querySelector('.fourthMainExperience');
const skillsContainer = document.querySelector('.skillsContainer');
const firstMainEducation = document.querySelector('.firstMainEducation');
const secondMainEducation = document.querySelector('.secondMainEducation');
const thirdMainEducation = document.querySelector('.thirdMainEducation');

container.addEventListener('click', openModal);
window.addEventListener('keydown', closeModal);
modalSection.addEventListener('click', closeModalAgain);

function closeModal(e) {
  if (e.key === 'Escape') {
    modalSection.classList.add('modalHidden');
    modalImg.innerHTML = '';
    modalImg.removeChild(modalInnerImg);
  }
}

function closeModalAgain(e) {
  if (e.target.classList.contains('modal')) {
    modalSection.classList.add('modalHidden');
    modalImg.innerHTML = '';
    modalImg.removeChild(modalInnerImg);
  }
}

function choosePicture(target) {
  if (target.classList.contains('avatar')) {
    const modalInnerImg = document.createElement('img');
    const preview = 'img/38359557.jpg';
    modalInnerImg.setAttribute('src', preview);
    modalInnerImg.classList.add('modalInnerImg');
    modalImg.append(modalInnerImg);
  } else if (target.classList.contains('contactsText')) {
    const clone = contactsText.cloneNode(true);
    clone.classList.add('contactsTextBold');
    modalImg.append(clone);
  } else if (target.classList.contains('firstContactsID')) {
    const clone = contactsInfo1.cloneNode(true);
    clone.classList.add('contactsInfo');
    modalImg.append(clone);
  } else if (target.classList.contains('secondContactsID')) {
    const clone = contactsInfo2.cloneNode(true);
    clone.classList.add('contactsInfo');
    modalImg.append(clone);
  } else if (target.classList.contains('firstExperience')) {
    const clone = firstMainExperience.cloneNode(true);
    clone.classList.add('experienceContainerStyle');
    modalImg.append(clone);
  } else if (target.classList.contains('secondExperience')) {
    const clone = secondMainExperience.cloneNode(true);
    clone.classList.add('experienceContainerStyle');
    modalImg.append(clone);
  } else if (target.classList.contains('thirdExperience')) {
    const clone = thirdMainExperience.cloneNode(true);
    clone.classList.add('experienceContainerStyle');
    modalImg.append(clone);
  } else if (target.classList.contains('fourthExperience')) {
    const clone = fourthMainExperience.cloneNode(true);
    clone.classList.add('experienceContainerStyle');
    modalImg.append(clone);
  } else if (target.classList.contains('skillsContainerID')) {
    const clone = skillsContainer.cloneNode(true);
    clone.classList.add('skillsContainerStyle');
    modalImg.append(clone);
  } else if (target.classList.contains('firstEducation')) {
    const clone = firstMainEducation.cloneNode(true);
    clone.classList.add('educationContainerStyle');
    modalImg.append(clone);
  } else if (target.classList.contains('secondEducation')) {
    const clone = secondMainEducation.cloneNode(true);
    clone.classList.add('educationContainerStyle');
    modalImg.append(clone);
  } else if (target.classList.contains('thirdEducation')) {
    const clone = thirdMainEducation.cloneNode(true);
    clone.classList.add('educationContainerStyle');
    modalImg.append(clone);
  }
}

function openModal(e) {
  const target = e.target;
  choosePicture(target);
  if (target.classList.contains('avatar') ||
    target.classList.contains('contactsText') ||
    target.classList.contains('firstContactsID') ||
    target.classList.contains('secondContactsID') ||
    target.classList.contains('firstExperience') ||
    target.classList.contains('secondExperience') ||
    target.classList.contains('thirdExperience') ||
    target.classList.contains('fourthExperience') ||
    target.classList.contains('skillsContainerID') ||
    target.classList.contains('firstEducation') ||
    target.classList.contains('secondEducation') ||
    target.classList.contains('thirdEducation')) {
  
    modalSection.classList.remove('modalHidden');
  }   
      
}
 
