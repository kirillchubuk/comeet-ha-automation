import { LeftSideFiltering } from '../support/layout/components/left-side-filtering';
import { OverlayForm } from '../support/layout/components/overlay-form';
import { SearchBar } from '../support/layout/components/search-bar';
import { SearchControls } from '../support/layout/components/search-controls';
import { HomePage } from '../support/pages/home-page';

const testData = {
  searchKeyWord: 'Memory',
  searchCategory: 'Computers/Tablets & Networking',
  searchRamType: 'DDR4 SDRAM',
  searchRamCapacity: '64 GB',
  searchFormFactor: 'SO-DIMM'
};

before(() => {
  const hp = new HomePage();
  hp.visit();
});

describe('search and order memory', () => {
  it(`searches by keyword: ${testData.searchKeyWord}`, () => {
    SearchBar.searchByInput(testData.searchKeyWord);
  });

  it(`asserts "${testData.searchCategory}" category is selected`, () => {
    LeftSideFiltering.categoryFilter('Category').within(() => {
      LeftSideFiltering.selectedFilter().should('contain.text', testData.searchCategory);
    });
  });

  it('opens filtering popup for Type category', () => {
    LeftSideFiltering.categoryFilter('Type').within(() => {
      LeftSideFiltering.seeAllButton().click();
    });
  });

  it(`selects ${testData.searchRamType} type`, () => {
    OverlayForm.selectFilterOption(testData.searchRamType);
    OverlayForm.checkFilterCountUpdated(1);
  });

  it(`switches to Total Capacity tab and selects ${testData.searchRamCapacity} capacity`, () => {
    OverlayForm.selectFilterCategory('Total Capacity');
    OverlayForm.selectFilterOption(testData.searchRamCapacity);
    OverlayForm.checkFilterCountUpdated(2);
  });

  it(`switches to Form Factor tab and selects ${testData.searchFormFactor} capacity`, () => {
    OverlayForm.selectFilterCategory('Form Factor');
    OverlayForm.selectFilterOption(testData.searchFormFactor);
    OverlayForm.checkFilterCountUpdated(3);
  });

  it('applies the selected filters', () => {
    OverlayForm.applyFilters();
  });

  it('sorts by Lowest first option', () => {
    SearchControls.sortBy('Price + Shipping: lowest first');
  });
});