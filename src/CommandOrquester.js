class CommandOrchestrator {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  async execute(config) {
    const { command } = config;
    const promises = this.commands.map(cmd => {
      if (cmd.command.toUpperCase() == command.toUpperCase()) {
        cmd.execute(config);
      }
    });
    Promise.all(promises);
  }
}

module.exports = CommandOrchestrator;
