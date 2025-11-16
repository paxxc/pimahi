/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ExtensionsCommand } from './extensions.js';
class CommandRegistry {
    commands = new Map();
    constructor() {
        this.register(new ExtensionsCommand());
    }
    register(command) {
        if (this.commands.has(command.name)) {
            console.warn(`Command ${command.name} already registered. Skipping.`);
            return;
        }
        this.commands.set(command.name, command);
        for (const subCommand of command.subCommands ?? []) {
            this.register(subCommand);
        }
    }
    get(commandName) {
        return this.commands.get(commandName);
    }
    getAllCommands() {
        return [...this.commands.values()];
    }
}
export const commandRegistry = new CommandRegistry();
//# sourceMappingURL=command-registry.js.map