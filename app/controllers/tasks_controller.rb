class TasksController < ApplicationController
    def index
        all_tasks = Task.all
        render json: all_tasks, status: :ok
    end

    def create
        new_task = Task.create!(task_params)
        render json: new_task, status: :created
    end

    def update
        updated_task = Task.find_by(id: params[:id])
        if updated_task
            updated_task.update(task_params)
            render json: updated_task
        else
            render json: "Something went wrong"
        end
    end

    private
    def task_params
        params.permit(:summary, :details, :progress, :project_id, :category_id)
    end
end
