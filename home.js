const vehicleStage = document.querySelector('.vehicle-stage');
const vehicleTrigger = vehicleStage.querySelector('.vehicle-trigger');
const vehicleIntro = vehicleStage.querySelector('.vehicle-intro');

function setIntroOpen(open) {
    vehicleStage.toggleAttribute('data-open', open);
    vehicleTrigger.setAttribute('aria-expanded', String(open));
    vehicleIntro.inert = !open;
}

vehicleTrigger.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') {
        setIntroOpen(true);
    }
});

vehicleStage.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') {
        setIntroOpen(false);
    }
});

vehicleTrigger.addEventListener('click', () => {
    setIntroOpen(!vehicleStage.hasAttribute('data-open'));
});

vehicleStage.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !vehicleStage.contains(event.relatedTarget)) {
        setIntroOpen(false);
    }
});

vehicleStage.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && vehicleStage.hasAttribute('data-open')) {
        event.preventDefault();
        setIntroOpen(false);
    }
});

vehicleTrigger.disabled = false;
