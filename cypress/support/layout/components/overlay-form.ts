const formLocator = '#x-overlay__form';
const leftSideFormLocator = '.x-overlay__wrapper--left';
const rightSideFormLocator = '.x-overlay__wrapper--right';

export const OverlayForm = {
	selectFilterCategory: (category: string) => {
		cy.get(leftSideFormLocator).find('[role="tab"]').contains(category).click();
	},

	selectFilterOption: (option: string) => {
		cy.get(rightSideFormLocator).within(() => {
			cy.contains('span', option).parentsUntil('label').find('input[role="checkbox"]').check();
			OverlayForm.checkFilterOptionSelectedBreadcrumbs(option);
		});
	},

	checkFilterOptionSelectedBreadcrumbs: (option: string) => {
		cy.get('.x-tray__breadcrumbs').contains(option);
	},

	checkFilterCountUpdated: (numOfFiltersApplied: number) => {
		cy.get('.x-tray__filter').should('have.text', `(${numOfFiltersApplied}) Filter(s) selected`);
	},

	applyFilters: () => {
		cy.get('button.x-overlay-footer__apply-btn').click().then(() => {
			cy.get(formLocator).should('not.exist');
		});
	}
};