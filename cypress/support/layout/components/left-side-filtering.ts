const filteringLocator = 'div.srp-rail__left';

export const LeftSideFiltering = {
	categoryFilter: (category: string) => {
		return cy.get('li.x-refine__main__list').contains('h3', category).parent().parent();
	},

	selectedFilter: () => {
		return cy.get('li[data-state="selected"]');
	},

	seeAllButton: () => {
		return cy.get('button').contains('see all');
	}
};