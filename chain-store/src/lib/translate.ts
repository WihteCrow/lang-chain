import { Runnable } from '@langchain/core/dist/runnables/base';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import * as process from 'process';

/**
 * 语言翻译 chain
 */
export function translate(): Runnable {
  const model = new ChatOpenAI(
    {
      model: 'glm-4',
      apiKey: process.env.TAVILY_API_KEY,
    },
    {
      baseURL: 'https://open.bigmodel.cn/api/paas/v4/',
    }
  );

  const systemTemplate = 'Translate the following from English into {language}';

  const parse = new StringOutputParser();

  const chatPromptTemplate = ChatPromptTemplate.fromMessages([
    ['system', systemTemplate],
    ['user', '{text}'],
  ]);

  return chatPromptTemplate.pipe(model).pipe(parse);
}
