/**
 * Created by georginaHughes on 13/09/2014.
 */
beforeEach(function() {
    browser.get('http://lunchplanner.com');
});
describe('state provider configuration:', function(){
    describe('clicking register user', function(){
        it('should render the register user area', function(){
            element(by.css('.mainNavigation__item-registerUser')).click().then(function() {
                expect(element(by.css('.registerUser.ng-scope')).isPresent()).toBe(true);
            });
        });
        it('should remove the pre-existing area', function(){
            element(by.css('.mainNavigation__item-registerUser')).click().then(function(){
                expect(element(by.css('welcome')).isPresent()).toBe(false);
            });
        });
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-registerUser')).click().then(function(){
                expect(browser.getTitle()).toBe('Register User - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-registerUser')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/registerUser');
            });
        });
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
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-registerTeam')).click().then(function(){
                expect(browser.getTitle()).toBe('Register Team - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-registerTeam')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/registerTeam');
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
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-joinTeam')).click().then(function(){
                expect(browser.getTitle()).toBe('Join Team - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-joinTeam')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/joinTeam');
            });
        });
    });
    describe('clicking plan meal', function(){
        it('should render the plan area', function(){
            element(by.css('.mainNavigation__item-planMeal')).click().then(function(){
                expect(element(by.css('.planMeal.ng-scope')).isPresent()).toBe(true);
            });
        });
        it('should remove the pre-existing area', function(){
            element(by.css('.mainNavigation__item-planMeal')).click().then(function(){
                expect(element(by.css('welcome')).isPresent()).toBe(false);
            });
        });
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-planMeal')).click().then(function(){
                expect(browser.getTitle()).toBe('Plan Meal - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-planMeal')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/planMeal');
            });
        });
    });
    describe('clicking join meal', function(){
        it('should render the join area', function(){
            element(by.css('.mainNavigation__item-joinMeal')).click().then(function(){
                expect(element(by.css('.joinMeal.ng-scope')).isPresent()).toBe(true);
            });
        });
        it('should remove the pre-existing area', function(){
            element(by.css('.mainNavigation__item-joinMeal')).click().then(function(){
                expect(element(by.css('welcome')).isPresent()).toBe(false);
            });
        });
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-joinMeal')).click().then(function(){
                expect(browser.getTitle()).toBe('Join Meal - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-joinMeal')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/joinMeal');
            });
        });
    });
});
xdescribe('the register user form', function(){
    it('should have a real name field', function(){
        expect(element(by.css('.registerUser__form-name'))).toExist();
    });
    it('should have an email field', function(){
        expect(element(by.css('.registerUser__form-email'))).toExist();
    });
    describe('real name field', function(){
        it('should have a corresponding label', function(){
            //maybe should gain focus when label is clicked?
        });
        it('should be an input field of type text', function(){
            expect(element(by.css('.registerUser__form-name')).getAttribute('type')).toMatch('text');
        });
    });
    describe('email field', function(){
        it('should have a corresponding label', function(){
            //maybe should gain focus when label is clicked?
        });
        it('should be an input field of type email', function(){
            expect(element(by.css('.registerUser__form-email')).getAttribute('type')).toMatch('email');
        });
        it('should be valide when a valid email address is entered', function(){
            element(by.css('.registerUser__form-email')).sendKeys('me@someemail.com')
        });
        it('should be invalid when an invalid email address is entered', function(){
            element(by.css('.registerUser__form-email')).sendKeys('someemail.com')
        });
    });
});