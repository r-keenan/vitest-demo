import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    // outputs the component to terminal
    //screen.debug();
    //looks for exactly one match.
    const companyName = screen.getByText("Top Flight Careers");
    expect(companyName).toBeInDocument();
  });
});
