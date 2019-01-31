import { TestePageModule } from './blank-page.module';

describe('TestePageModule', () => {
    let blankPageModule: TestePageModule;

    beforeEach(() => {
        blankPageModule = new TestePageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
