import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p id="rt">Hi there, this is your Dashboard.</p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}