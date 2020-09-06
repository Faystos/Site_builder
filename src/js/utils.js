export function row (content, styles = '') {
  return `
  <div class="row" style="${styles}">${ content }</div>
  `;
}

export function col (content) {
  return `
  <div class="col-sm">${ content }</div>
  `;
}

export function formSidebar(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-contorl form-contorl-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-contorl form-contorl-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr/>
  `
}