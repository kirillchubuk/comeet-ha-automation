const searchBarLocator = 'header[role="banner"] form';

export const SearchBar = {
	searchByInput: (input: string) => {
		cy.get(searchBarLocator).within(() => {
			cy.get('input[type="text"]').type(input);
			cy.get('input[type="submit"]').click();
		});
	}
};