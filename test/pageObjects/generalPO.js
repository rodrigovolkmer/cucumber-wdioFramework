class generalPO  {
    get searchField () { return $('#search'); }
    get searchButton () { return $('button.Search--submitBtn'); }
    get localTimeGreetings () { return $('.LocationImage__greeting'); } 
    get resultsList () { return $('#Business-List'); }
    get businessProfile () { return $('.BusinessProfile__ProfileNav'); }
    get businessContactSection () { return $('.BusinessProfile__Contact__root'); }
    get businessServicesSection () { return $('.BusinessProfile__Lists--services'); }
    
    loadUrl (url) { 
        browser.url(url);
    }

    searchFor(string) { 
        this.searchField.waitForVisible();
        this.searchField.setValue(string);
        this.searchButton.click();
    }

    businessDetailPresent(detail) {
        if (detail == 'contact') {
            return this.businessContactSection.isExisting();
        } else if (detail == 'services') {
            return this.businessServicesSection.isExisting();
        } else {
            return false;
        }
    }
}

module.exports = new generalPO();
