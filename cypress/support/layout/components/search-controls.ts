const controlsSelector = 'div.srp-controls';

export const SearchControls = {
	sortBy: (sortByOption: string) => {
		cy.get(controlsSelector).within(() => {
			cy.get('.srp-controls__sort-label').siblings().find('button[type="button"]').click().then((sortButton) => {
				cy.contains(sortByOption).click({ force: true });
			});
		});
	}
};