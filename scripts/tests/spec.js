/**
 * Created by georginaHughes on 13/09/2014.
 */
beforeEach(function() {
    browser.get('http://lunchplanner.com');
});

describe('clicking register user', function(){
    it('should render the register user area', function(){
        //click register
        element(by.css('.mainNavigation__item-registerUser')).click().then(function() {
            //see if registration area exists
            //ui-router is injecting a class onto my element, therefore my class
            //alone produces a fail, even though the expected element is present
            expect(element(by.css('.registerUser.ng-scope')).isPresent()).toBe(true);
        });
    });
    it('should remove the pre-existing area', function(){
        //click register
        element(by.css('.mainNavigation__item-registerUser')).click();

        //check if initial area has been removed
        expect(element(by.css('welcome')).isPresent()).toBe(false);
    });
    //browser title - .getTitle()
    //url
});
describe('clicking register team', function(){
    it('should render the register team area', function(){
        element(by.css('.mainNavigation__item-registerTeam')).click().then(function(){
            expect(element(by.css('.registerTeam.ng-scope')).isPresent()).toBe(true);
        });
    });
    it('should remove the pre-existing area', function(){
        element(by.css('.mainNavigation__item-registerTeam')).click().then(function(){
            expect(element(by.css('.welcome')).isPresent()).toBe(false);
        });
    });
});
describe('clicking join team', function(){
    it('should render the join team area', function(){
        element(by.css('.mainNavigation__item-joinTeam')).click().then(function(){
            expect(element(by.css('.joinTeam.ng-scope')).isPresent()).toBe(true);
        });
    });
    it('should remove the pre-existing area', function(){
        element(by.css('.mainNavigation__item-joinTeam')).click().then(function(){
            expect(element(by.css('.welcome')).isPresent()).toBe(false);
        });
    });
});
describe('clicking plan', function(){
    it('should render the plan area', function(){
        //click plan
        element(by.css('.mainNavigation__item-planMeal')).click().then(function(){
            //see if plan area exists
            expect(element(by.css('.planMeal.ng-scope')).isPresent()).toBe(true);
        });
    });
    it('should remove the pre-existing area', function(){
        //click register
        element(by.css('.mainNavigation__item-planMeal')).click();

        //check if initial area has been removed
        expect(element(by.css('welcome')).isPresent()).toBe(false);
    });
});
describe('clicking join', function(){
    it('should render the join area', function(){
        //click join
        element(by.css('.mainNavigation__item-joinMeal')).click().then(function(){
            //see if join area exists
            expect(element(by.css('.joinMeal.ng-scope')).isPresent()).toBe(true);
        });
    });
    it('should remove the pre-existing area', function(){
        //click register
        element(by.css('.mainNavigation__item-joinMeal')).click();

        //check if initial area has been removed
        expect(element(by.css('welcome')).isPresent()).toBe(false);
    });
});