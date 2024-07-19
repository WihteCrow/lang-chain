import { translate } from './translate';

describe('chainStore', () => {
  it('should work', async () => {
    const chain = translate();
    const result = await chain.invoke({
      text: 'We can now combine this with the model and the output parser from above. This will chain all three components together.',
      language: 'chinese',
    });
    console.log(result);
  });
});
