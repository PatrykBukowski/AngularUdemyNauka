export class Task {
  private readonly taskName: string;
  constructor(taskName: string) {
    this.taskName = taskName;
  }
  public getTaskName(): string {
    return this.taskName;
  }
}
