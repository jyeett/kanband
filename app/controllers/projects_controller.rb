class ProjectsController < ApplicationController
    def index
        user_projects = @current_user.projects
        render josn: user_projects, status: :ok
    end

    def show
        @this_project = @current_user.projects.find_by(id: params[:id])
        render json: @this_project.tasks, status: :ok
    end

    def create
        new_project = @current_user.projects.create!(project_params)
        render json: new_project, status: :created
    end

    def destroy
        del_project = @current_user.projects.find_by(id: params[:id])
        del_project.destroy
        head :no_content
    end

    def updated
        updated_project = @current_user.project.find_by(id: params[:id])
        if updated_project
            updated_project.update(project_params)
            render json: updated_project
        else
            render json: "Something went wrong"
        end
    end

    private
    def project_params
        params.permit(:name, :description)
    end
end
