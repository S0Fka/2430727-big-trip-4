import AbstractView from '../framework/view/abstract-view';
import {FilterType} from '../const';

const NoTasksTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now',
};

function createNoPointsTemplate(filterType) {
  return `<p class="trip-events__msg">${NoTasksTextType[filterType]}</p>`;
}

export default class NoPointsView extends AbstractView {

  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointsTemplate(this.#filterType);
  }

}
