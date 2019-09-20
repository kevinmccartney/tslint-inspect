import fsResolve from 'resolve';

export class ConfigResolver {
  private tslintConfigMap: {
    [key: string]: string,
  } = {
    'tslint:all': 'tslint/lib/configs/all',
    'tslint:latest': 'tslint/lib/configs/latest',
    'tslint:recommended': 'tslint/lib/configs/recommended',
  };

  public resolve(config: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fsResolve(
        this.mapConfig(config),
        { basedir: process.cwd() },
        (err, response) => {
          response ? resolve(response) : reject(err);
        }
      );
    });
  }

  private mapConfig(config: string): string {
    if (Object.keys(this.tslintConfigMap).includes(config)) {
      return this.tslintConfigMap[config];
    }

    return config;
  }
}